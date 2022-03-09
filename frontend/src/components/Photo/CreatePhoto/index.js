import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { loadAlbums } from '../../../store/albums'
import { addPhotos } from '../../../store/photos'
import './CreatePhotoModal.css'
const CreatePhoto = ({ hideForm }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const albums = useSelector(state => state.albums)
    const images = useSelector(state => state.photos)

    const album = Object.values(albums)
    const image = Object.values(images)

    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    // const [listAlbum, setListAlbum] = useState(album[0])

    const history = useHistory()

    const postPhoto = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            imageUrl,
            userId: user?.id,
            // albumId: listAlbum
        }
        let photoPost = await dispatch(addPhotos(payload))
        hideForm()

    }
    useEffect(() => {
        dispatch(loadAlbums())
    }, [dispatch])

    return (
        <form className='photo__postForm' onSubmit={postPhoto}>
            <header className='photo__createHeader'>Post A New Pic</header>
            <div className='photo__form'>
                <label htmlFor='content'>
                    {/* Enter Description */}
                    <input
                        className='photo__content'
                        type='text'
                        placeholder='Fill In Description'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </label>

                <label htmlFor='image'>
                    {/* Enter Image Link */}
                    <input
                        className='photo__createImage'
                        type='url'
                        placeholder='Enter Image Link'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
            </div>
            <button
                className='photo__createButton'
                type='submit'>Post Image!</button>
        </form>
    )
}

export default CreatePhoto
