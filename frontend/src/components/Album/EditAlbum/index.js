import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deleteAlbum, editAlbum } from '../../../store/albums';
import './EditAlbum.css'
const EditAlbum = ({ album }) => {
    const { id, userId, title, description, imageUrl } = album;
    const { albumId } = useParams();
    const albums = useSelector(state => state.albums)
    const albumVal = Object.values(albums)
    const choice = albumVal.find(val => val.id === +albumId)
    const history = useHistory();
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const [titles, setTitle] = useState(title ? choice.title : '')
    const [descriptions, setDescription] = useState(choice.description ? description : '')
    const [imageLink, setImageUrl] = useState(choice.imageUrl ? imageUrl : '')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const errorValidation = [];

        if (!titles) errorValidation.push('Please Enter a new title.')
        if (!descriptions) errorValidation.push('Please Enter a new description.')
        if (!imageLink) errorValidation.push('Please Enter a new image.')
        if (titles.length < 3 || titles.length > 25) errorValidation.push('Title has to be between 3 and 25 characters.')
        if (descriptions.length < 3 || descriptions.length > 25) errorValidation.push('Description has to be between 3 and 25 characters.')

        setErrors(errorValidation)
    }, [titles, descriptions, imageLink])

    const albumEdit = async (e) => {
        e.preventDefault()

        const payload = {
            title: titles,
            description: descriptions,
            userId: userId,
            albumId: +albumId,
            imageUrl: imageLink
        }

        const albums = await dispatch(editAlbum(payload))

        history.push('/dashboard/albums')
    }

    // useEffect(() => {
    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(deleteAlbum(choice.id))

        history.push('/dashboard/albums')
    }
    // }, [dispatch])

    return (
        <div className="edit__page">
            <header className='edit__header'>Edit Your Album</header>
            <ul className='edit__errors'>
                {errors.map(err => (
                    <li key={err}>{err}</li>
                ))}
            </ul>
            <form
                className='edit__form'
                onSubmit={albumEdit}

            >
                <label htmlFor='title'>
                    {/* Enter Description */}
                    <input
                        className='album__title'
                        type='text'
                        placeholder='Fill In Title'
                        value={titles}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label htmlFor='image'>
                    {/* Enter Image Link */}
                    <input
                        className='album__enterImage'
                        type='url'
                        placeholder='Enter Image Link'
                        value={imageLink}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>

                <label htmlFor='description'>
                    {/* Enter a description */}
                    <input
                        className='album__description'
                        type='text'
                        placeholder='Entter Description'
                        value={descriptions}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <div className="edit__buttons">
                    <button
                        className='edit__buttonEdit'
                        type='submit'
                        disabled={errors.length > 0}
                        >
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        className='edit__buttonDelete'
                        // onClick={(e) => dispatch(deleteAlbum(choice.id))}
                        onClick={handleDelete}                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditAlbum
