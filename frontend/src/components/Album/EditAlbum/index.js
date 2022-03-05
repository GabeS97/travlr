import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { editAlbum } from '../../../store/albums';

const EditAlbum = ({ album }) => {
    const { id, userId, title, description, imageUrl } = album;
    const { albumId } = useParams();

    const albums = useSelector(state => state.albums)
    const albumVal = Object.values(albums)
    const choice = albumVal.find(val => val.id === +albumId)
    console.log('0.5. check if the chocei is at least the correct value', choice)
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const [titles, setTitle] = useState(title ? choice.title : '')
    const [descriptions, setDescription] = useState(choice.description ? description : '')
    const [imageLink, setImageUrl] = useState(choice.imageUrl ? imageUrl : '')


    const albumEdit = async (e) => {
        e.preventDefault()

        const payload = {
            title: titles,
            description: descriptions,
            userId: userId,
            albumId: +albumId,
            imageUrl: imageLink
        }

        console.log('1. this is the paylaod from the the edit component: ', payload)
        const albums = await dispatch(editAlbum(payload))

    }

    return (
        <div className="edit__page">
            <header className='edit__header'>Edit Your Album</header>
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
                        // value={descriptions}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type='submit'>Edit Album!</button>
            </form>
        </div>
    )
}

export default EditAlbum
