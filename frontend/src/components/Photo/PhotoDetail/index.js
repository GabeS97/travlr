import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deletePhoto, loadOnePhoto, loadPhotos } from '../../../store/photos';
import './PhotoDetail.css'

const PhotoDetail = ({ value, setValue }) => {
    const { photoId } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    const [editValue, setEditValue] = useState(value)

    const onChange = (e) => setEditValue(e.target.value)

    const onKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            e.target.blur()
        }
    }
    const onBlur = (e) => {
        if (e.target.value.trim() === '') {
            setEditValue(value)
        }
    }

    useEffect(() => {
        dispatch(loadOnePhoto(photoId))
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

    return (
        <>
            <div className="photoDetail__page">
                <div className="photoDetail__header">
                    {photo.map(pic => (
                        <div key={pic.id} className="photoDetail__infoPage">
                            <div className="photoDetail__imageCard">
                                <img className='photoDetail__image' src={pic.imageUrl} alt='' />
                            </div>

                            {/* <div className="photoDetail__infoCard">
                                <h2 className='photoDetail__title'>{pic.content}</h2>
                            </div> */}
                            <input className='photoDetail__title'
                                type="text"
                                aria-label="Field name"
                                value={editValue}
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                onBlur={onBlur}
                            />
                        </div>
                    ))}
                    <div className="photoDetail__buttons">
                        <button >Edit</button>
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
        </>
    )
}

export default PhotoDetail
