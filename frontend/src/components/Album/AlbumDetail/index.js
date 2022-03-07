import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadOneAlbum } from '../../../store/albums'
import AlbumPhoto from '../../Photo/AlbumPhoto'
import './AlbumDetail.css'

const AlbumDetail = () => {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const album = useSelector(state => state.albums);
    const singles = Object.values(album)
    const user = useSelector(state => state.session.user)

    const personAlbum = singles.filter(info => info.userId === user.id)
    useEffect(() => {
        dispatch(loadOneAlbum(albumId))
    }, [dispatch])

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
                </div>
            </div>
            <AlbumPhoto albumId={albumId} user={user} />
        </>
    )
}

export default AlbumDetail
