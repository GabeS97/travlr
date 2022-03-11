import { csrfFetch } from "./csrf"

const LOAD__USERS = 'users/LAOD_USERS'

const loadUsers = (users) => {
    return {
        type: LOAD__USERS,
        users
    }
}

export const getUsers = () => async dispatch => {
    const res = await csrfFetch('/api/listUsers')

    if (res.ok) {
        const users = await res.json()
        dispatch(loadUsers(users))
        return users
    }
}

const initialState = {}
const usersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD__USERS: {
            newState = { ...state }
            action.users.forEach(user => {
                newState[user.id] = user
            })
            return newState
        }
        default:
            return state
    }
}

export default usersReducer
