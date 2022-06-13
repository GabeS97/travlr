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
    const [titles, setTitle] = useState(title ? choice.title : '')
    const [descriptions, setDescription] = useState(choice.description ? choice.description : '')
    const [imageLink, setImageUrl] = useState(choice.imageUrl ? choice.imageUrl : '')
    const [errors, setErrors] = useState([])
    const user = useSelector(state => state.session.user);



    const albumEdit = async (e) => {
        e.preventDefault()

        const payload = {
            title: titles,
            description: descriptions,
            userId: userId,
            albumId: +albumId
        }

        const albums = await dispatch(editAlbum(payload))
        history.push('/dashboard/albums')

    }

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
                        // value={titles}
                        value={titles}

                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>

                <label htmlFor='description'>
                    {/* Enter a description */}
                    <input
                        className='album__description'
                        type='text'
                        value={descriptions}
                        onChange={(e) => setDescription(e.target.value)}
                        required

                    />
                </label>
                <div className="edit__buttons">
                    <button
                        className='edit__buttonEdit'
                        type='submit'
                        // disabled={errors.length > 0}
                    >
                        SUBMIT
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
                        DELETE
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditAlbum
