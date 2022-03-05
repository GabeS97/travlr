import { csrfFetch } from "./csrf";

const LOAD_ALBUMS = 'albums/LOAD_ALBUMS'
const ADD_ALBUMS = 'albums/ADD_ALBUMS'
const EDIT_ALBUMS = 'albums/EDIT_ALBUMS'
const DELETE_ALBUMS = 'albums/DELETE_ALBUMS'

const load = (albums) => {
    return {
        type: LOAD_ALBUMS,
        albums
    }
};

const add = (albums) => {
    return {
        type: ADD_ALBUMS,
        albums
    }
};

const edit = (albums) => {
    return {
        type: EDIT_ALBUMS,
        albums
    }
};

const remove = (albums) => {
    return {
        type: DELETE_ALBUMS.
            albums
    }
};


export const loadAlbum = () => async dispatch => {
    const res = await csrfFetch('/api//albums');
    if (res.ok) {
        const albums = await res.json();
        dispatch(load(albums));
        return albums;
    }
}

export const addAlbum = (payload) => async dispatch => {
    const res = await csrfFetch('/api/albums', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const albums = await res.json()
        dispatch(add(albums));
        return albums
    }
}

export const editAlbum = (payload) => async dispatch => {
    console.log('2. this is the payload of the thunk of edit: ', payload)
    const res = await csrfFetch(`/api/albums/${payload.albumId}`, {
        method: 'PUT',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const albums = await res.json();
        console.log('4. this is the saved album response from the thunk ')

        dispatch(edit(albums))
        return albums
    }
}

export const deleteAlbum = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/albums/${payload.id}`, {
        method: 'DELETE',
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const albums = await res.json()
        dispatch(remove(albums))
        return albums
    }
}


const initialState = {};

const albumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALBUMS: {
            newState = { ...state }
            const allAlbums = {}
            action.albums.forEach(album => {
                allAlbums[album.id] = album
            })
            newState = allAlbums
            return newState
        }
        case ADD_ALBUMS: {
            newState = { ...state }
            newState = { ...state, [action.albums.id]: action.albums }
            return newState
        }
        case EDIT_ALBUMS: {
            newState = { ...state }
            newState = { ...state, [action.albums.id]: action.albums }
            return newState
        }
        case DELETE_ALBUMS: {
            newState = { ...state }
            delete newState[action.albums.id]
            return newState
        }
        default:
            return state
    }
}

export default albumReducer;
