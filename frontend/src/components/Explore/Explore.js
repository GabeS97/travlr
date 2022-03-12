import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos'
import { Modal } from '../../context/Modal'
import './Explore.css'
import SignupForm from '../SignupFromModal/SignupForm'
import { NavLink } from 'react-router-dom'
import ExploreImage from './ExploreImage'

const ExploreHeader = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState()
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    const user = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])

    return (
        <div className='explore'>
            <div className="explore__page">
                <div className="explore__title">
                    <p>Easily organize all your photos into beautiful albums to share with friends, family, or even other Flickr members.</p>
                    {user ?
                        <NavLink to='/dashboard/albums'>
                            <button className='explore__signIn'>Go To Your Dashboard!</button>
                        </NavLink>
                        : <button className='explore__signIn'
                            onClick={() => setShowModal(true)}
                        >Sign Up to Create Memories of Your Own!
                        </button>
                    }
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <SignupForm />
                        </Modal>
                    )}
                </div>
            </div>
                <div className="photoDetail__page">
                    <ExploreImage />
                </div>
        </div>
    )
}

export default ExploreHeader
