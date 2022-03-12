import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos'
import { Modal } from '../../context/Modal'
import './Explore.css'
import SignupForm from '../SignupFromModal/SignupForm'
import { NavLink } from 'react-router-dom'
import { getUsers } from '../../store/users'

const ExploreImage = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState()
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    const users = useSelector(state => state.users)
    const user = useSelector(state => state.session.user)
    const usr = Object.values(users)

    useEffect(() => {
        dispatch(loadPhotos())
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className='grid__container'>
            <div className="grid__images">
                {photo.map(ele => (
                    <>
                        <img className='image__contents' src={ele.imageUrl} alt='' />
                    </>
                ))}
            </div>
        </div>
    )
}

export default ExploreImage
