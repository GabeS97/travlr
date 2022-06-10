import { csrfFetch } from "./csrf";

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const ADD_PHOTOS = 'photos/ADD_PHOTOS'
const EDIT_PHOTO = 'photots/EDIT_PHOTO'

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

const edit = (photo) => {
    return {
        type: EDIT_PHOTO,
        photo
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
    console.log(payload, 'we just want to console.log this first to make sure, this is coming from our comp');
    const res = await csrfFetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const photos = await res.json()
        console.log(photos, 'then we want to see if our backend successfully send data to our thunk. therefore we are checking for the value after it had been json\'ed after the if ');
        dispatch(add(photos))
        return photos
    }
}

export const editPhotos = (payload) => async dispatch => {
    const res = await csrfFetch(`api/photos/${payload.photoId}`, {
        method: 'PUT',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const photo = await res.json()
        dispatch(edit(photo))
        return photo
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
            return newState
        }
        case EDIT_PHOTO: {
            newState = { ...state }
            newState = {
                ...state, [action.photo.id]: action.photo
            }
            return newState
        }
        default:
            return state;
    }
}

export default photoReducer;
