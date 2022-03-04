import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../context/Modal'
import { loadAlbum } from '../../store/albums'
import './Album.css'
import CreateAlbum from './CreateAlbum/CreateAlbum'
const Album = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState()
    const albums = useSelector(state => state.albums)
    const album = Object.values(albums);

    const user = useSelector(state => state.session.user)
    const choice = album.filter(ele => ele.userId === user.id)

    useEffect(() => {
        dispatch(loadAlbum())
    }, [dispatch])

    return (
        <div className='album__page'>
            <div className="album__title">
                <p>Easily organize all your photos into beautiful albums to share with friends, family, or even other Flickr members.</p>
                <button className='album__upload'
                    onClick={() => setShowModal(true)}
                >Share More Memories!
                </button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateAlbum />
                    </Modal>
                )}
            </div>

            <div className="album__body">
                <div className="album__info">
                    {choice.map(ele => (
                        <div key={ele.id} className='album__desc'>{ele.title}
                            <div className="album__edits">
                                <i className="fa-solid fa-pen-to-square"></i>
                                <i className="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Album
