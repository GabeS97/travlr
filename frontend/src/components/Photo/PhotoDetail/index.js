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
    const photo = Object.values(photos)
    const [showModal, setShowModal] = useState(false)
    const user = useSelector(state => state.session.user)
    const albums = useSelector(state => state.albums)
    const album = Object.values(albums)
    const filteredAlbum = album.filter(choice => choice.userId === user.id)
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
            <div className="photoDetail__page">
                <div className="photoDetail__header">
                    {photo.map(pic => (
                        <div key={pic.id} className="photoDetail__infoPage">
                            <div className="photoDetail__imageCard">
                                <img className='photoDetail__image' src={pic.imageUrl} alt='' />
                            </div>

                            <div className="photoDetail__infoCard">
                                <h2 className='photoDetail__title'>{pic.content}</h2>
                            </div>
                        </div>
                    ))}
                    <div className="photoDetail__buttons">
                        <button
                            onClick={() => setShowModal(true)}
                        >Edit
                        </button>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <EditOnePhoto photos={photo} hideForm={hideForm} filteredAlbum={filteredAlbum} />
                            </Modal>
                        )}
                        <button
                            onClick={handleDelete}
                        // onClick={(e) => {
                        //     const confirm = window.confirm(
                        //         'Are you sure you want to delete this photo?'
                        //     )
                        //     if (confirm === true) {
                        //         // setSelect(photoId)
                        //         dispatch(deletePhoto(photoId))
                        //         history.push('/dashboard/photos')
                        //     }
                        // }}
                        > Delete</button>
                    </div>
                </div>
            </div>
            <Comment />
        </>
    )
}

export default PhotoDetail
