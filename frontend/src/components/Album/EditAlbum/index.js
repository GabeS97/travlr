import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deleteAlbum, editAlbum } from '../../../store/albums';
import './EditAlbum.css'

const EditAlbum = ({ album, setAlbumModal }) => {
    const { id, userId, title, description, imageUrl } = album;
    const { albumId } = useParams();
    const albums = useSelector(state => state.albums)
    const albumVal = Object.values(albums)
    const choice = albumVal.find(val => val.id === +albumId)
    const history = useHistory();
    const dispatch = useDispatch()
    // const [titles, setTitle] = useState('choice.title '? choice.title : '')
    const [titles, setTitle] = useState(choice.title ? choice.title : '')
    const [descriptions, setDescription] = useState(choice.description ? choice.description : '')
    const [imageLink, setImageUrl] = useState(choice.imageUrl ? imageUrl : '')
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.session.user);
    // console.log(titles, '<<<<<<<<<<<<<< this is the description >>>>>>>>>>>>>>', title)
    // useEffect(() => {
    //     const errorValidation = [];

    //     if (!titles) errorValidation.push('Please Enter a new title.')
    //     if (!descriptions) errorValidation.push('Please Enter a new description.')
    //     if (!imageLink) errorValidation.push('Please Enter a new image.')
    //     if (titles.length < 3 || titles.length > 25) errorValidation.push('Title has to be between 3 and 25 characters.')
    //     if (descriptions.length < 3 || descriptions.length > 25) errorValidation.push('Description has to be between 3 and 25 characters.')


    //     setErrors(errorValidation)
    // }, [titles, descriptions, imageLink])


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

    // const handleDelete = (e) => {
    //     e.preventDefault()

    //     dispatch(deleteAlbum(choice.id))

    //     history.push('/dashboard/albums')
    // }
    return (
        <div className="edit__page">
            <header className='edit__createHeader'>Edit Your Album</header>
            {/* <ul className='edit__errorsUpdate'>
                {errors.map(err => (
                    <div key={err}>{err}</div>
                ))}
            </ul> */}
            <form
                className='edit__form'
                onSubmit={albumEdit}

            >
                <label htmlFor='title'>
                    {/* Enter Description */}
                    <input
                        className='album__title'
                        type='text'
                        // placeholder={titles}
                        // placeholder='Fill In Title'
                        value={titles}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>

                <label htmlFor='image'>
                    {/* Enter Image Link */}
                    <input
                        className='album__enterImage'
                        type='url'
                        // placeholder='Enter Image Link'
                        // placeholder={imageLink}
                        value={imageLink}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required

                    />
                </label>

                <label htmlFor='description'>
                    {/* Enter a description */}
                    <input
                        className='album__descriptions'
                        type='text'
                        // placeholder='Entler Description'
                        // placeholder={descriptions}
                        value={descriptions}
                        onChange={(e) => setDescription(e.target.value)}
                        required

                    />
                </label>
                <div className="edit__buttons">
                    <button
                        className='edit__buttonEdit'
                        type='submit'
                        disabled={errors.length > 0}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        className='edit__buttonDelete'
                        // onClick={(e) => dispatch(deleteAlbum(choice.id))}
                        onClick={() => {
                            const confrim = window.confirm(
                                'Deleting this album, will delete all the photos stored within this album. Are you sure you wish to continue?'
                            )
                            if (confrim === true) {
                                dispatch(deleteAlbum(choice.id))
                                history.push('/dashboard/albums')
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

export default EditAlbum
