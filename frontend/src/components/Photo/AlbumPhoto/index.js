import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { loadPhotos } from '../../../store/photos'
import './AlbumPhoto.css'


const AlbumPhoto = ({ albumId, user }) => {
    const dispatch = useDispatch()
    const albumPic = useSelector(state => state.photos)
    const pics = Object.values(albumPic)

    const choiceImage = pics.filter(pic => pic.albumId === +albumId)
    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])


    return (
        <div className='albumPhoto__page'>
            <div className="albumPhoto__container">
                {choiceImage.map(photo => (
                    <Link to={`/photos/${photo.id}`}>
                        <img className='albumPhoto__photos' key={photo.id} src={photo.imageUrl} alt='' />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AlbumPhoto
