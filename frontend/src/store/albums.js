import { csrfFetch } from "./csrf";

const LOAD_ALBUMS = 'albums/LOAD_ALBUMS'
const ADD_ALBUMS = 'albums/ADD_ALBUMS'
const EDIT_ALBUMS = 'albums/EDIT_ALBUMS'
const DELETE_ALBUMS = 'albums/DELETE_ALBUMS'

const LOAD_ALBUM = 'albums/LOAD_ALBUM'

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
        type: DELETE_ALBUMS,
        albums
    }
};

const loadOne = (album) => {
    return {
        type: LOAD_ALBUM,
        album
    }
}


export const loadAlbums = () => async dispatch => {
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
    const res = await csrfFetch(`/api/albums/${payload.albumId}`, {
        method: 'PUT',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const albums = await res.json();
        dispatch(edit(albums))
        return albums
    }
}

export const deleteAlbum = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/albums/${payload}`, {
        method: 'DELETE',
        body: JSON.stringify({ payload })
    })

    if (res.ok) {
        const albums = await res.json()
        dispatch(remove(albums))
        return albums
    }
}

export const loadOneAlbum = (albumId) => async dispatch => {
    const res = await csrfFetch(`/api/albums/${albumId}`)

    if (res.ok) {
        const album = await res.json()
        dispatch(loadOne(album))
        return album
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
        case LOAD_ALBUM: {
            newState = { ...state }
            newState = {
                state,
                [action.album.id]: action.album
            }
            return newState
        }
        default:
            return state
    }
}

export default albumReducer;
