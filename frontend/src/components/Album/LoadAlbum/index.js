import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, Route, useParams } from 'react-router-dom'
import { Modal } from '../../../context/Modal'
import { deleteAlbum, loadAlbums } from '../../../store/albums'
import DefaultImage from '../../Dashboard/DefaultImage'
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
    const choice = album.filter(ele => ele.userId === user?.id)

    console.log(choice)
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
                                    {console.log(ele, "<<<<<<<<<<<<")}
                                    <NavLink to={`/albums/${ele.id}`}>
                                        {ele?.Photos?.[0]?.imageUrl ?
                                            <img className='album__image' src={ele?.Photos?.[0]?.imageUrl} alt='' /> :
                                            <img className='album__image' src={`https://subang.go.id/backend/images/default.png`} alt='' />
                                        }
                                    </NavLink>

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
                                                    <Route path='/dashboard/albums/:albumId'>
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

                    {/* <div className="album__infos">
                                    <div className="album__titleContain">
                                        <p>{ele.createdAt}</p>
                                    </div>
                                </div> */}
                </div> : <DefaultImage />
            }

        </div >
    )
}

export default Album
