import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams, useHistory } from 'react-router-dom'
import { deleteAlbum, loadAlbums, loadOneAlbum } from '../../../store/albums'

import './AlbumDetail.css'

const AlbumDetail = () => {
    const { albumId } = useParams();
    const albums = useSelector(state => state.albums);
    const singleAlbum = Object.values(albums).find(album => album?.id === +albumId)
    const [showImageUrl, setImageUrl] = useState(singleAlbum?.Photos?.[0].imageUrl)
    const dispatch = useDispatch();
    const history = useHistory();
    // useEffect(() => {
    //     dispatch(loadOneAlbum(+albumId))
    // }, [dispatch])



    const getImage = (e) => {
        let imageArr = e.currentTarget?.id.split('__')
        let imageId = imageArr[imageArr.length - 1]
        let image = document.getElementById(`albumDetail__image__scrollwheel__${imageId}`)

        setImageUrl(image?.src)
    }

    console.log(showImageUrl)

    // const hideForm = () => {
    //     setShowModal(false)
    // }

    return (
        <div className="albumDetail__page">
            <div className="albumDetail__page__top">
                <div className="albumDetail__image__preview">
                    <img className='albumDetail__image' src={showImageUrl} alt='' />
                </div>
            </div>

            <div className="albumDetail__page__bottom">
                <div className="albumDetail__image__scrollwheel">
                    {singleAlbum?.Photos?.map(photo => (
                        <img
                            onClick={getImage}
                            id={`albumDetail__image__scrollwheel__${photo?.id}`}
                            key={photo?.id}
                            className='albumDetail__scrollwheel__image'
                            src={photo?.imageUrl}
                            alt=''
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default AlbumDetail
