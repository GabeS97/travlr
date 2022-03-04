import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAlbum } from '../../../store/albums'
import './CreateAlbum.css'
const CreateAlbum = () => {
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const postAlbum = async (e) => {
        e.preventDefault()

        const payload = {
            title,
            imageUrl,
            userId: user?.id
        }

        console.log('1. this is the payload for what we as sending inot our thunk', payload)
        const album = await dispatch(addAlbum(payload))
    }
    return (
        <form className='album__postForm' onSubmit={postAlbum}>
            <header className='album__create'>Upload New Memories</header>
            <div className='album__form'>
                <label htmlFor='title'>
                    {/* Enter Description */}
                    <input
                        className='album__title'
                        type='text'
                        placeholder='Fill In Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label htmlFor='image'>
                    {/* Enter Image Link */}
                    <input
                        className='album__enterImage'
                        type='url'
                        placeholder='Enter Image Link'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>

                <label htmlFor='description'>
                    {/* Enter a description */}
                    <input
                        className='album__description'
                        type='text'
                        placeholder='Entter Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <button type='submit'>Post Album!</button>
        </form>
    )
}

export default CreateAlbum
