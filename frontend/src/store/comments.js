import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'comments/LOAD_COMMENTS'
const CREATE_COMMENT = 'comments/CREATE_COMMENTS'
const EDIT_COMMENT = 'comments/EDIT_COMMENTS'
const DELETE_COMMENT = 'comments/DELETE_COMMENTS'

const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}

const createComment = (comment) => {
    return {
        type: CREATE_COMMENT,
        comment
    }
}

const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export const getComments = () => async dispatch => {
    const res = await csrfFetch('/api/comments')
    if (res.ok) {
        const comments = await res.json()
        dispatch(loadComments(comments))
        return comments
    }
}

export const addComment = (payload) => async dispatch => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const comment = await res.json()
        dispatch(createComment(comment))
        return comment
    }
}
export const putComment = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${payload.commentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const comment = await res.json()
        dispatch(editComment(comment))
        return comment
    }
}
let initialState = {}

const commentsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS: {
            newState = { ...state }
            const allComments = {}
            action.comments.forEach(comment => {
                allComments[comment.id] = comment
            })
            newState = allComments
            return newState
        }
        case CREATE_COMMENT: {
            newState = { ...state }
            newState = { ...state, [action.comment.id]: action.comment}
            return newState
        }
        case EDIT_COMMENT: {
            newState = { ...state }
            newState = { ...state, [action.comment.id]: action.comment }
            return newState
        }
        default:
            return state
    }
}

export default commentsReducer
