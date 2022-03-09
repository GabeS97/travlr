import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deletePhoto, loadOnePhoto } from '../../../store/photos';


import './PhotoDetail.css'
const PhotoDetail = () => {
    const { photoId } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)


    useEffect(() => {
        dispatch(loadOnePhoto(photoId))
    }, [dispatch])


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
                                {/* <p className='photoDetail__description'>{pic.description}</p> */}
                            </div>
                        </div>
                    ))}
                    <div className="photoDetail__buttons">
                        <button >Edit</button>
                        <button
                        onClick={() => {
                            const confirm = window.confirm(
                                'Are you sure you want to delete this photo?'
                            )
                            if (confirm === true) {
                                dispatch(deletePhoto(photoId))
                                history.push('/dashboard/photos')
                            }
                        }}
                        >
                            Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoDetail
