import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addAlbum } from '../../../store/albums'
import './CreateAlbum.css'
const CreateAlbum = ({ hideForm }) => {
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const errorValidation = [];

        if (!title) errorValidation.push('Please Enter a new title.')
        if (!description) errorValidation.push('Please Enter a new description.')
        if (!imageUrl) errorValidation.push('Please Enter a new image.')
        if (title.length < 3 || title.length > 25) errorValidation.push('Title has to be between 3 and 25 characters.')
        if (description.length < 3 || description.length > 25) errorValidation.push('Description has to be between 3 and 25 characters.')

        setErrors(errorValidation)
    }, [title, description, imageUrl])

    const postAlbum = async (e) => {
        e.preventDefault()

        const payload = {
            title,
            description,
            imageUrl,
            userId: user?.id
        }

        const album = await dispatch(addAlbum(payload))
        hideForm()
    }


        return (
            <form className='album__postForm' onSubmit={postAlbum}>
            <header className='album__createHeader'>Upload New Memories</header>
            {/* <ul className='edit__errorsPost'>
                {errors.map(err => (
                    <div key={err}>{err}</div>
                    ))}
                </ul> */}
            <div className='album__form'>
                <label htmlFor='title'>
                    {/* Enter Description */}
                    <input
                        className='album__title'
                        type='text'
                        placeholder='Fill In Title'
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </label>

                <label htmlFor='description'>
                    {/* Enter a description */}
                    <input
                        className='album__description'
                        type='text'
                        placeholder='Entter Description'
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        />
                </label>
            </div>
            <button
                className='album__createButton'
                type='submit'
                // disabled={errors.length > 0}
                >Post Album!</button>
        </form>
    )
}

export default CreateAlbum
