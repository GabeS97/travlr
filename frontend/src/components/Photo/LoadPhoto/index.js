import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../../context/Modal';
import { loadPhotos } from '../../../store/photos';
import CreatePhoto from '../CreatePhoto';

import './Photo.css'

const Photo = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState()
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)

    const choice = photo.filter(pic => pic.userId === user.id)
    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])

    return (
        <div className="dashboard__contents">
            <div className="photo__title">
                <p>Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</p>
                <button className='photo__upload'
                    onClick={() => setShowModal(true)}
                >Go to Camera Roll
                </button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreatePhoto />
                    </Modal>
                )}
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
