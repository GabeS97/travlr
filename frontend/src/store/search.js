import { csrfFetch } from "./csrf"

const LOAD_SEARCH = 'search/LOAD_SEARCH'
const CLEAR_SEARCH = 'search/CLEAR_SEARCH'

const loadSearchActionCreator = (searches) => ({
    type: LOAD_SEARCH,
    searches
})

const clearSearchActionCreator = () => ({
    type: CLEAR_SEARCH
})

export const loadSearchThunk = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/search/${payload.searchQuery}`)

    if (res.ok) {
        let searchResult = await res.json()
        console.log(searchResult)
        dispatch(loadSearchActionCreator(searchResult))
        return searchResult
    }
}

export const clearSearchThunk = () => async dispatch => {
    dispatch(clearSearchActionCreator())
    return
}

const searchReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SEARCH: {
            newState = { ...state }
            action.searches.forEach(search => {
                newState[search.id] = search
            })
            return newState
        }
        default:
            return state
    }
}

export default searchReducer
