import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deletePhoto, editPhotos, loadOnePhoto, loadPhotos } from '../../../store/photos';
import './PhotoDetail.css'

const PhotoDetail = () => {
    const { photoId } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos[photoId])
    const { content, imageUrl, userId, albumId } = photos || {}
    const [value, setValue] = useState(content ? content : "Click to Edit New Description")
    const [imageLink, setImageUrl] = useState(imageUrl ? imageUrl : '')

    const [editValue, setEditValue] = useState(value)
    // const onChange = (e) => setEditValue(e.target.value)

    useEffect(() => {
        dispatch(loadOnePhoto(photoId))
    }, [dispatch])



    // const onKeyDown = (e) => {
    //     if (e.key === 'Enter' || e.key === 'Escape') {
    //         e.target.blur()
    //     }
    // }
    // const onBlur = (e) => {
    //     if (e.target.value.trim() === '') {
    //         setEditValue(value)
    //     }
    // }


    // const contentEdit = async (e) => {
    //     e.preventDefault()

    //     const payload = {
    //         content: value,
    //         userId: +userId,
    //         albumId: +albumId,
    //         photoId: +photoId,
    //         imageUrl: imageLink
    //     }

    //     console.log('1. can we look at our payload please, ', payload)
    //     const editContent = await dispatch(editPhotos(payload))
    // }



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
                    <div key={photos?.id} className="photoDetail__infoPage">
                        <div className="photoDetail__imageCard">
                            <img className='photoDetail__image' src={photos?.imageUrl} alt='' />
                        </div>
                        <input
                            // onSubmit={contentEdit}
                            // onEnter={contentEdit}
                            className='photoDetail__title'
                            type="text"
                            aria-label="Field name"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            // onChange={onChange}
                            // onKeyDown={onKeyDown}
                            // onBlur={onBlur}
                        />
                    </div>
                    <div className="photoDetail__buttons">
                        <button
                            className='photoDetail__clickToEdit'
                            // onClick={contentEdit}
                        >Click Text To Edit</button>
                        <button
                            onClick={handleDelete}
                        > Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoDetail

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
