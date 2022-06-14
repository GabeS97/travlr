import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadSearchThunk } from '../../../store/search'
import '../Navigation.css'

const SearchBar = () => {
    const [queryString, setQueryString] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (queryString) {
            dispatch(loadSearchThunk(queryString))
        }
    }, [dispatch, queryString])
    return (
        <div className="home__searchbar">
            <input
                type='search'
                className='home__search'
                value={queryString}
                onChange={(e) => setQueryString(e.target.value)}
                placeholder='Search Travlr by tags, title, or people...'
            >
            </input >
        </div>
    )
}

export default SearchBar
