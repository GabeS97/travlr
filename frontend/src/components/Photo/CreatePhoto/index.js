import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { loadAlbums } from '../../../store/albums'
import { addPhotos } from '../../../store/photos'
import './CreatePhotoModal.css'

const CreatePhoto = ({ hideForm, filteredAlbum }) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [tags, setTags] = useState([])

    const [albumChoice, setAlbumChoice] = useState(filteredAlbum[0]?.id)
    const history = useHistory()

    const postPhoto = async (e) => {
        e.preventDefault()

        let tagsArr;
        if (tags) {
            tagsArr = tags.split(',');
            setTags(tagsArr)
        }

        const payload = {
            content,
            image,
            tags: tagsArr,
            username: user?.username,
            userId: user?.id,
            albumId: +albumChoice
        }
        let photoPost = await dispatch(addPhotos(payload))
        hideForm()
    }


    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

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
                        required
                    />
                </label>


                <label htmlFor='selectAlbum'>
                    <select
                        value={albumChoice}
                        onChange={(e) => setAlbumChoice(e.target.value)}
                        className='photo__albumDropDown'>
                        <option
                            className='photo__albumSelect'
                            disabled>Select An Album</option>
                        {filteredAlbum.map(choice => (
                            <option key={choice.id} value={choice.id} className='photo__albumDropDown'>{choice.title}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor='tags'>
                    <input
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className='photo__albumDropDown'
                        placeholder='e.g. travel, vacation... (optional)'
                    >
                    </input>
                </label>

                <label htmlFor='image'>
                    {/* Enter Image Link */}
                    <input
                        type="file"
                        onChange={updateFile}
                    // className='photo__createImage'
                    // type='url'
                    // placeholder='Enter Image Link'
                    // value={imageUrl}
                    // onChange={(e) => setImageUrl(e.target.value)}
                    // required
                    />
                </label>
            </div>
            <button
                className='photo__createButton'
                type='submit'>SUBMIT</button>
        </form>
    )
}

export default CreatePhoto
