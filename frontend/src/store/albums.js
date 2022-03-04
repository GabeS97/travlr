import { csrfFetch } from "./csrf";

const LOAD_ALBUMS = 'albums/LOAD_ALBUMS'
const ADD_ALBUMS = 'albums/ADD_ALBUMS'

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
            console.log('5. let check that the reducer state has been updated', newState)
            return newState
        }
        default:
            return state
    }
}

export default albumReducer;
