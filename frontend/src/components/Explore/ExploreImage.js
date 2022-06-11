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
    let test = [];
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState()
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    const users = useSelector(state => state.users)
    const user = useSelector(state => state.session.user)
    const choice = photo.find(pic => pic.userId === user?.id)
    const usr = Object.values(users)

    useEffect(() => {
        dispatch(loadPhotos())
        dispatch(getUsers())
    }, [dispatch])

    for (let i = 0; i < usr.length - 1; i++) {
        let selectUser = usr[i];
        // console.log('selectUser iteration', selectUser)

        const choice = photo.find(pic => pic.userId === selectUser?.id)
        test.push(choice)

    }

    return (
        <div className='grid__container'>
            <div className="grid__images">
                {photo.map(ele => (
                    <>
                        <img className='image__contents' src={ele.imageUrl} alt=''>
                            {/* {choice && (
                            <i class="fa-solid fa-user"></i>
                            )} */}
                        </img>
                    </>
                ))}
            </div>
        </div>
    )
}

export default ExploreImage
