import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Modal } from '../../../context/Modal'
import { deleteAlbum, loadAlbum } from '../../../store/albums'
import CreateAlbum from '../CreateAlbum'
import EditAlbum from '../EditAlbum'
import './Album.css'


const Album = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [albumModal, setAlbumModal] = useState(false)
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
                        <div div key={ele.id} className='album__cardContainer' >
                            <img className='album__image' src={ele.imageUrl} alt='' />
                            <div className="album__edits">
                                <div className='edit__page'>
                                    <NavLink className='edit__buttonLink' to={`/dashboard/albums/${ele.id}`}>
                                        <i class="fa-solid fa-magnifying-glass"
                                            onClick={(e => setAlbumModal(true))}
                                        ></i>
                                    </NavLink>
                                    {albumModal && (
                                        <Route path='/dashboard/albums/:albumId'>
                                            <Modal classname='album__editModal' onClose={() => setAlbumModal(false)}>
                                                <EditAlbum album={ele} />
                                            </Modal>
                                        </Route>
                                    )}
                                    {/* <i className="fa-solid fa-trash"
                                        onClick={() => dispatch(deleteAlbum(ele.id))}
                                    ></i> */}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div >
    )
}

export default Album
