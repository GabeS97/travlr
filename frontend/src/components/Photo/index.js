import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos';
import './Photo.css'
const Photo = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)

    const choice = photo.filter(pic => pic.userId === user.id)
    console.log(choice)
    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])

    return (
        <div className="dashboard__contents">
            <div className="photo__title">
                <p>Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</p>
                <button className='photo__upload'>Go to Camera Roll</button>
            </div>
            <div className='photo__page'>
                <div className="photo__info">
                    {choice.map(pic => (
                        <img className='photo__pic' key={pic.id} src={pic.imageUrl} alt='' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Photo
