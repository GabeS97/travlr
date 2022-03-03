import { csrfFetch } from "./csrf";

const LOAD_ALBUMS = 'albums/LOAD_ALBUMS'

const load = (albums) => {
    return {
        type: LOAD_ALBUMS,
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
        default:
            return state
    }
}

export default albumReducer;
