import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAlbum } from '../../store/album'
import './Album.css'
const Album = () => {
    const dispatch = useDispatch()
    const albums = useSelector(state => state.album)
    const album = Object.values(albums);

    const user = useSelector(state => state.session.user)
    const choice = album.filter(ele => ele.userId === user.id)

    useEffect(() => {
        dispatch(loadAlbum())
    }, [dispatch])

    return (
        <div className='album__page'>
                {/* <div className='album__add'>New Album +</div> */}
                <img className='album__add' src='../../plus__button.png' alt='' />
            <div className="album__info">
                {choice.map(ele => (
                    <div key={ele.id} className='album__title'>{ele.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Album
