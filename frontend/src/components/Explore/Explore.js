import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos'
import { Modal } from '../../context/Modal'
import SignupForm from '../SignupFromModal/SignupForm'
import { NavLink } from 'react-router-dom'
import ExploreImage from './ExploreImage'

import './Explore.css'
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
                    <h2>A collection of our users' moments</h2>
                    <p> “NOT ALL THOSE WHO WANDER ARE LOST.” – J.R.R. TOLKIEN</p>
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
