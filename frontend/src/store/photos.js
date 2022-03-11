import { csrfFetch } from "./csrf";

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const ADD_PHOTOS = 'photos/ADD_PHOTOS';
const EDIT_PHOTO = 'photots/EDIT_PHOTO';
const DELETE_PHOTO = 'photos/DELETE_PHOTO';
const LOAD_PHOTO = 'photos/LOAD_PHOTO'


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

const remove = (photo) => {
    return {
        type: DELETE_PHOTO,
        photo
    }
}

const loadOne = (photo) => {
    return {
        type: LOAD_PHOTO,
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
    const res = await csrfFetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const photos = await res.json()
        dispatch(add(photos))
        return photos
    }
}

export const editPhotos = (payload) => async dispatch => {
    console.log('2. payload from the single pic for the PhotoDetail', payload)
    const res = await csrfFetch(`/api/photos/${payload.photoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const photo = await res.json()
        console.log('4. this is the res.json() of photos for our singlePhoto', photo)
        dispatch(edit(photo))
        return photo
    }

}

export const deletePhoto = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/photos/${payload}`, {
        method: 'DELETE',
        body: JSON.stringify({ payload })
    })

    if (res.ok) {
        const photo = await res.json()
        dispatch(remove(photo))
        return photo
    }
}

export const loadOnePhoto = (photoId) => async dispatch => {

    const res = await csrfFetch(`/api/photos/${photoId}`)

    if (res.ok) {
        const photo = await res.json()
        dispatch(loadOne(photo))
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
        case DELETE_PHOTO: {
            newState = { ...state }
            delete newState[action.photo.id]
            return newState
        }
        case LOAD_PHOTO: {
            newState = { ...state }
            newState = { state, [action.photo.id]: action.photo }
            return newState
        }
        default:
            return state;
    }
}

export default photoReducer;
