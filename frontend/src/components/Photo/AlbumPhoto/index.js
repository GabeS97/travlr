import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../../store/photos'
import './AlbumPhoto.css'


const AlbumPhoto = ({ albumId, user }) => {
    const dispatch = useDispatch()
    const albumPic = useSelector(state => state.photos)
    const pics = Object.values(albumPic)

    const choiceImage = pics.filter(pic => pic.albumId === +albumId)

    console.log(choiceImage)
    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])


    return (
        <div className='albumPhoto__page'>
            <div className="albumPhoto__container">
                {choiceImage.map(photo => (
                    <img className='albumPhoto__photos' key={photo.id} src={photo.imageUrl} alt='' />
                ))}
            </div>
        </div>
    )
}

export default AlbumPhoto
