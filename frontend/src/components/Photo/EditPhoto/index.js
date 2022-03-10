import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { deletePhoto, editPhotos } from '../../../store/photos'
import './EditPhoto.css'

const EditPhoto = ({ photos }) => {
    const { userId, albumId, imageUrl, content } = photos
    const history = useHistory();
    const dispatch = useDispatch()
    const { photoId } = useParams();
    const [imageLink, setImageUrl] = useState(imageUrl ? imageUrl : '')
    const [contents, setContent] = useState(content ? content : '')

    const photo = useSelector(state => state.photos)
    const user = useSelector(state => state.session.user)

    const pics = Object.values(photo)
    const choice = pics.find(pic => pic.id === +photoId)

    const photoEdit = async (e) => {
        e.preventDefault()

        const payload = {
            content: contents,
            imageUrl: imageLink,
            photoId: +photoId,
            userId: userId,
            albumId: albumId

        }
        const photo = await dispatch(editPhotos(payload))
        history.push('/dashboard/photos')

    }

    // const photoDelete = (e) => {
    //     e.preventDefault()

    //     dispatch(deletePhoto(photoId))

    // }
    return (
        <div className="photo__pageForm">
            <header className='photo__createHeader'>Edit Your Photo</header>
            {/* <ul className='photo__errorsUpdate'>
            {errors.map(err => (
                <div key={err}>{err}</div>
            ))}
        </ul> */}
            <form
                className='photo__form'
                onSubmit={photoEdit}

            >
                <label htmlFor='content'>
                    {/* Enter Description */}
                    <input
                        className='photo__content'
                        type='text'
                        placeholder='Fill In Content'
                        value={contents}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>

                <label htmlFor='image'>
                    {/* Enter Image Link */}
                    <input
                        className='photo__enterImage'
                        type='url'
                        placeholder='Enter Image Link'
                        value={imageLink}
                        onChange={(e) => setImageUrl(e.target.value)}
                    // required

                    />
                </label>

                <div className="photo__buttons">
                    <button
                        className='photo__buttonphoto'
                        type='submit'
                    // disabled={errors.length > 0}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        type='submit'
                        className='photo__buttonDelete'
                        onClick={() => {
                            const confirm = window.confirm(
                                'Are you sure you want to delete this photo?'
                            )
                            if (confirm === true) {
                                dispatch(deletePhoto(choice.id))
                                history.push('/dashboard/photos')
                            }
                        }}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditPhoto
