import { csrfFetch } from "./csrf";

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const ADD_PHOTOS = 'photos/ADD_PHOTOS'

const load = (photos) => {
    return {
        type: LOAD_PHOTOS,
        photos
    };
};

const add = (photos) => {
    return {
        type: ADD_PHOTOS,
        photos
    }
}

export const loadPhotos = () => async dispatch => {
    const res = await csrfFetch('/api/photos');
    if (res.ok) {
        const photos = await res.json()
        dispatch(load(photos))
        return photos
    }
}

export const addPhotos = (payload) => async dispatch => {
    console.log('2. payload of the createPhoto component, console.log of payload from the thunk', payload)
    const res = await csrfFetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const photos = await res.json()

        dispatch(addPhotos(photos))
        return photos
    }
}

const initialState = {};

const photoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PHOTOS: {
            newState = { ...state }
            const allPhotos = {};
            action.photos.forEach(photo => {
                allPhotos[photo.id] = photo
            })
            newState = allPhotos;
            return newState
        }
        case ADD_PHOTOS: {
            newState = { ...state }
            newState = {
                ...state, [action.photos.id]: action.photos
            }
            console.log('6. lets be sure and check the reducer', newState)
            return newState
        }
        default:
            return state;
    }
}

export default photoReducer;
