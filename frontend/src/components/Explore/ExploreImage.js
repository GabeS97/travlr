import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos'
import './Explore.css'

const ExploreImage = () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    console.log(photo)

    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])

    return (
        <>
            <div className="explore__page">
                <h1 className='explore__title'>ExploreImage</h1>
                <div className="explore__card">
                    {photo.map(pic => (
                        <img className='explore_photos' key={pic.id} src={pic.imageUrl} alt='' />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ExploreImage
