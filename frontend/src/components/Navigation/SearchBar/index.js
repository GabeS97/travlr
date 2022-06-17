import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loadSearchThunk } from '../../../store/search'

import '../Navigation.css'

const SearchBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [queryString, setQueryString] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault()

        const payload = {
            searchQuery: queryString
        }
        await dispatch(loadSearchThunk(payload))
    }



    return (
        <form
            className="home__searchbar"
            onSubmit={handleSearch}
        >
            <div className="home__searchbar__content">
                <button
                    className='search__button'
                    type='submit'
                >
                    <i id="search-icon" className="fas fa-search search__button__icon"></i>
                </button>
                <input
                    type='text'
                    className='home__search'
                    value={queryString}
                    onChange={(e) => setQueryString(e.target.value)}
                    placeholder='Search Travlr by tags, title, or people...'
                >
                </input >
            </div>
        </form>
    )
}

export default SearchBar
