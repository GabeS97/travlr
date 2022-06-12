import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import { Modal } from '../../../context/Modal';
import { loadAlbums } from '../../../store/albums';
import { deletePhoto, loadOnePhoto, loadPhotos } from '../../../store/photos';
import Comment from '../../Comment/LoadComment';
import EditOnePhoto from '../EditOnePhoto';


import './PhotoDetail.css'

const PhotoDetail = () => {
    const { photoId } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos).find(pics => pics?.id === +photoId)
    const user = useSelector(state => state.session.user)
    const albums = useSelector(state => state.albums)
    const album = Object.values(albums)
    const filteredAlbum = album.filter(choice => choice.userId === user.id)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(loadOnePhoto(photoId))
    }, [dispatch])

    useEffect(() => {
        dispatch(loadAlbums())
    }, [dispatch])

    const handleDelete = async (e) => {
        // e.preventDefault()
        const confirm = window.confirm(
            'Are you sure you want to delete this photo?'
        )
        if (confirm === true) {
            await dispatch(loadPhotos())
                .then(dispatch(deletePhoto(photoId)))
            history.push('/dashboard/photos')
        }
    }

    const hideForm = () => {
        setShowModal(false)
    }


    return (
        <>
            <div className="photoDetail__modal">
                <div className="photoDetail__page">

                    <div className="photoDetail__image__container">
                        <div className="photoDetail__image">
                            <img className='photoDetail__image__file' src={photo?.imageUrl} alt='' />
                        </div>

                        <div className="photoDetail__contents">
                            <div className="photoDetials__info">

                                <div className="photoDetail__content">
                                    <h3>{photo?.content}</h3>
                                </div>

                                <div className="photoDetail__tags">
                                    {photo?.tags?.map(tag => (
                                        <p>{`#${tag}`}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="photoDetail__buttons">
                                <button
                                    className='photoDetail__edit__button'
                                    onClick={() => setShowModal(true)}
                                >Edit
                                </button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <EditOnePhoto photos={photo} hideForm={hideForm} filteredAlbum={filteredAlbum} />
                                    </Modal>
                                )}
                                <button
                                    className='photoDetail__delete__button'
                                    onClick={handleDelete}
                                > Delete</button>
                            </div>
                        </div>
                    </div>


                    <div className="photoDetail__comments">
                        <Comment />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PhotoDetail
