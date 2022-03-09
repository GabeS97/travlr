import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Modal } from '../../../context/Modal'
import { deleteAlbum, loadAlbums, loadOneAlbum } from '../../../store/albums'
import AlbumPhoto from '../../Photo/AlbumPhoto'
import './AlbumDetail.css'

const AlbumDetail = () => {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const album = useSelector(state => state.albums);
    const singles = Object.values(album)
    const user = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const single = singles.find(single => single.id === albumId)
    const personAlbum = singles.filter(info => info.userId === user.id)
    // console.log(single, '<<<<<<<<<<<<<<')

    // const [toggle, setToggle] = useState(false)
    // const [text, setText] = useState()
    useEffect(() => {
        dispatch(loadOneAlbum(albumId))
    }, [dispatch])

    // const onDelete = async (e) => {
    //     const confirm = window.confirm(
    //         'Deleting this album, will delete all the photos stored within this album. Are you sure you wish to continue?'
    //     )
    //     if (confirm === true) {
    //         await dispatch(loadAlbums())
    //             .then(dispatch(deleteAlbum(albumId)))
    //         history.push('/dashboard/albums')
    //     }
    // }


    return (
        <>
            <div className="albumDetail__page">
                <div className="albumDetail__header">
                    {singles.map(single => (
                        <div key={single.id} className="albumDetail__infoPage">
                            <div className="albumDetail__imageCard">
                                <img className='albumDetail__image' src={single.imageUrl} alt='' />
                            </div>

                            <div className="albumDetail__infoCard">
                                <h2 className='albumDetail__title'>{single.title}</h2>
                                <p className='albumDetail__description'>{single.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="albumDetail__buttons">
                        <button >Edit</button>
                        {/* <button onClick={onDelete}>Delete</button> */}
                        <button onClick={() => {
                            const confirm = window.confirm(
                                'Deleting this album, will delete all the photos stored within this album. Are you sure you wish to continue?'
                            )
                            if (confirm === true) {
                                dispatch(deleteAlbum(albumId))
                                history.push('/dashboard/albums')
                            }
                        }}>Delete</button>
                    </div>
                </div>
            </div>
            <AlbumPhoto albumId={albumId} user={user} />
        </>
    )
}

export default AlbumDetail
