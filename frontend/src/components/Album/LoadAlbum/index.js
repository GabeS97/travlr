import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, Route, useParams } from 'react-router-dom'
import { Modal } from '../../../context/Modal'
import { deleteAlbum, loadAlbums } from '../../../store/albums'
import DefaultImage from '../../Dashboard/DefaultImage'
import AlbumDetail from '../AlbumDetail'
import CreateAlbum from '../CreateAlbum'
import EditAlbum from '../EditAlbum'
import './Album.css'


const Album = () => {
    const dispatch = useDispatch()
    const albums = useSelector(state => state.albums)
    const album = Object.values(albums);
    const user = useSelector(state => state.session.user)
    const choice = album.filter(ele => ele.userId === user?.id)
    const [showModal, setShowModal] = useState(false)
    const [albumModal, setAlbumModal] = useState(false)
    const [showOpenAlbum, setOpenAlbum] = useState(false)

    useEffect(() => {
        dispatch(loadAlbums())
    }, [dispatch])

    const hideForm = () => {
        if (album.length + 1) {
            setShowModal(false)
        }
    }

    return (
        <div className='album__page'>
            {choice.length > 0 ?
                <div className="album__title">
                    <p>Easily organize all your photos into beautiful albums to share with friends and family.</p>
                    <button className='album__upload'
                        onClick={() => setShowModal(true)}
                    >Share More Memories!
                    </button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreateAlbum hideForm={hideForm} />
                        </Modal>
                    )}
                </div> : <div className="album__title">
                    <p>There is currently no albums that can are available to be viewd or populated. Share your memories below.</p>
                    <button className='album__upload'
                        onClick={() => setShowModal(true)}
                    >Share More Memories!
                    </button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreateAlbum hideForm={hideForm} />
                        </Modal>
                    )}
                </div>
            }

            {choice.length > 0 ?
                <div className="album__body">
                    <div className="album__info">
                        {choice?.map(ele => (
                            <div key={ele?.id} className='album__cardContainer' >
                                <div className="image__cardRedirect">

                                    <NavLink
                                        to={`/dashboard/albums/${ele.id}/view`}
                                    >
                                        {ele?.Photos?.[0]?.imageUrl ?
                                            <img
                                                className='album__image'
                                                src={ele?.Photos?.[0]?.imageUrl}
                                                alt=''
                                                onClick={() => setOpenAlbum(true)}
                                            /> :
                                            <img className='album__image' src={`https://subang.go.id/backend/images/default.png`} alt='' />
                                        }
                                    </NavLink>

                                    {showOpenAlbum && (
                                        <Route exact path='/dashboard/albums/:albumId/view'>
                                            <Modal onClose={() => setOpenAlbum(false)}>
                                                <AlbumDetail />
                                            </Modal>
                                        </Route>
                                    )}

                                    <div className="album__post__top">
                                        <div className="album__user__title">
                                            {ele.title}
                                        </div>

                                        <div className="album__edits">
                                            <div className='edit__page'>
                                                <NavLink className='edit__buttonLink' to={`/dashboard/albums/${ele.id}`}>
                                                    <i className="fa-solid fa-magnifying-glass edit__button__options"
                                                        onClick={(e => setAlbumModal(true))}
                                                    ></i>
                                                </NavLink>

                                                {albumModal && (
                                                    <Route exact path='/dashboard/albums/:albumId'>
                                                        <Modal classname='album__editModal' onClose={() => setAlbumModal(false)}>
                                                            <EditAlbum album={ele} />
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

export default Album
