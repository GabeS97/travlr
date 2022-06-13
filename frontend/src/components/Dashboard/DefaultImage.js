import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos'
import { getUsers } from '../../store/users'
import './DefaultImage.css'

const DefaultImage = () => {
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
        <div className='defaultgrid__container'>
            <div className="defaultgrid__images">
                {photo.map(ele => (
                    <div  key={ele?.id}>
                        <img className='defaultimage__contents' src={ele.imageUrl} alt='' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DefaultImage
