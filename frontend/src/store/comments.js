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
    console.log('2. this is my thunk for my comments', res)
    if (res.ok) {
        const comments = await res.json()
        console.log('4. is our response return a string comments ', comments)
        dispatch(loadComments(comments))
        return comments
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
            console.log('5. whats are reducer looking like right now ? ', newState)
            return newState
        }
        default:
            return state
    }
}

export default commentsReducer
