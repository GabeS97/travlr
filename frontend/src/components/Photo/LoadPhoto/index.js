import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import { loadAlbums } from '../../../store/albums';
import { loadPhotos } from '../../../store/photos';
import DefaultImage from '../../Dashboard/DefaultImage';
import CreatePhoto from '../CreatePhoto';
import EditPhoto from '../EditPhoto';

import './Photo.css'

const Photo = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const [photoModal, setPhotoModal] = useState(false)
    const user = useSelector(state => state.session.user)
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    const albums = useSelector(state => state.albums)
    const album = Object.values(albums)
    const choice = photo.filter(pic => pic.userId === user?.id)
    const filteredAlbum = album.filter(choice => choice.userId === user.id)
    console.log(choice)


    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadAlbums())


    }, [dispatch])
    const hideForm = () => {
        if (photo.length + 1) {
            setShowModal(false)
        }
    }
    const closeForm = () => {
        if (photo.length - 1) {
            setShowModal(false)
        }
    }

    return (
        <div className="dashboard__contents">
            {choice.length > 0 ?
                <div className="photo__title">
                    <p>Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</p>
                    <button className='photo__upload'
                        onClick={() => setShowModal(true)}
                    >Go to Camera Roll
                    </button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreatePhoto hideForm={hideForm} filteredAlbum={filteredAlbum} />
                        </Modal>
                    )}
                </div> :

                <div className="photo__title">
                    <p>There is currently no public facing photos, Go to your camera roll to pupulate your photostream.</p>
                    <button className='photo__upload'
                        onClick={() => setShowModal(true)}
                    >Go to Camera Roll
                    </button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreatePhoto hideForm={hideForm} filteredAlbum={filteredAlbum} />
                        </Modal>
                    )}
                </div>
            }

            {choice.length > 0 ?
                <div className="photo__body">
                    <div className="photo__info">
                        {choice.map(pic => (
                            <div key={pic.id} className='photo__cardContainer' >
                                <div className="photo__linkCard">
                                    <NavLink to={`/photos/${pic.id}`}>
                                        <img className='photo__image' src={pic.imageUrl} alt='' />
                                    </NavLink>

                                    <div className="photo__linkCard__info">
                                        <div className="photo__linkCard__info__container">
                                            <div className="photo__linkCard__description">
                                                {pic?.content}
                                            </div>

                                            <div className="photo__linkCard__tags">
                                                {pic?.tags?.map(tag => (
                                                    <p>{`#${tag}`}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>



                                    <div className="photo__post__top">

                                        <div className="photo__posted__user">
                                            {`@${pic?.User?.username}`}
                                        </div>

                                        <div className="photo__edits">
                                            <div className='edit__page'>
                                                <NavLink className='edit__buttonLink' to={`/dashboard/photos/${pic.id}`}>
                                                    <i className="fa-solid fa-magnifying-glass"
                                                        onClick={(e) => setPhotoModal(true)}
                                                    ></i>
                                                </NavLink>
                                                {photoModal && (
                                                    <Route path='/dashboard/photos/:photoId'>
                                                        <Modal classname='photo__editModal' onClose={() => setPhotoModal(false)}>
                                                            <EditPhoto photos={pic} closeForm={closeForm} filteredAlbum={filteredAlbum} />
                                                        </Modal>
                                                    </Route>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> : <DefaultImage />
            }
        </div >
    )
}

export default Photo
