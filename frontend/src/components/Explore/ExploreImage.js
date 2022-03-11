import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos'
import { Modal } from '../../context/Modal'
import './Explore.css'
import SignupForm from '../SignupFromModal/SignupForm'
import { NavLink } from 'react-router-dom'

const ExploreImage = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState()
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])

    return (
        <>
            <div className="grid__images">
                {photo.map(ele => (
                    <img src={ele.imageUrl} alt='' />
                ))}
            </div>
        </>
    )
}

export default ExploreImage
