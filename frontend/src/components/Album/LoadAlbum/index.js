import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import { NavLink, Link, Route, useParams } from 'react-router-dom'
import { Modal } from '../../../context/Modal'
import { deleteAlbum, loadAlbums } from '../../../store/albums'
import CreateAlbum from '../CreateAlbum'
import EditAlbum from '../EditAlbum'
import './Album.css'


const Album = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [albumModal, setAlbumModal] = useState(false)
    // const [imageModal, setImageModal] = useState(false)
    const albums = useSelector(state => state.albums)
    const album = Object.values(albums);
    const user = useSelector(state => state.session.user)
    const choice = album.filter(ele => ele.userId === user.id)
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
            <div className="album__title">
                <p>Easily organize all your photos into beautiful albums to share with friends, family, or even other Flickr members.</p>
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

            <div className="album__body">
                <div className="album__info">
                    {choice.map(ele => (
                        <div key={ele.id} className='album__cardContainer' >
                            <div className="image__cardRedirect">
                                <Link to={`/albums/${ele.id}`}>
                                    <img className='album__image' src={ele.imageUrl} alt='' />
                                </Link>
                            </div>

                            <div className="album__edits">
                                <div className='edit__page'>
                                    <NavLink className='edit__buttonLink' to={`/dashboard/albums/${ele.id}`}>
                                        <i className="fa-solid fa-magnifying-glass"
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

                            <div className="album__infos">
                                <div className="album__titleContain">
                                    <h2 className='album__titles'>{ele.title}</h2>
                                    <p>{ele.createdAt}</p>
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
