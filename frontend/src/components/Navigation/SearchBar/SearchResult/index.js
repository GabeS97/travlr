import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadSearchThunk } from '../../../../store/search'
import './SearchResult.css'

const SearchResult = () => {
    const searchResult = Object.values(useSelector(state => state?.searches))
    const { searchQuery } = useParams()
    const dispatch = useDispatch()

    return (
        <div className="search__results">
            <div className="search__result">
                {searchResult?.[0] ?
                    <div className="search__results__container">
                        <h3>{`Search result for "${searchQuery}"`}</h3>
                        <div className="search__result__grid">
                            {searchResult?.map(search => (
                                <div className="searchResult__card" key={search.id}>
                                    <img className='searchResult__image' src={search?.imageUrl} alt='' />
                                </div>
                            ))}
                        </div>
                    </div>
                        :
                        <div className='search__not__found'>{`There is no result for "${searchQuery}"`}</div>
                    }

            </div>
        </div>
    )
}

export default SearchResult
