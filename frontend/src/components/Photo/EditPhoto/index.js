import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { deletePhoto, editPhotos } from '../../../store/photos'
import './EditPhoto.css'

const EditPhoto = ({ photos, closeForm, filteredAlbum }) => {
    const { userId, albumId, imageUrl, content } = photos
    const history = useHistory();
    const dispatch = useDispatch()
    const { photoId } = useParams();
    const photo = useSelector(state => state.photos)
    const pics = Object.values(photo)
    const choice = pics.find(pic => pic.id === +photoId)
    const [tags, setTags] = useState(choice?.tags ? choice?.tags : '')

    const [contents, setContent] = useState(choice?.content ? choice?.content : [])

    const user = useSelector(state => state.session.user)

    const [albumChoice, setAlbumChoice] = useState(filteredAlbum[0]?.id)

    const photoEdit = async (e) => {
        e.preventDefault()

        let tagsArr;
        if (tags) {
            tagsArr = tags.split(',');
            setTags(tagsArr)
        }

        const payload = {
            content: contents,
            tags: tagsArr,
            photoId: +photoId,
            userId: userId,
            albumId: +albumChoice

        }
        const photo = await dispatch(editPhotos(payload))
        history.push('/dashboard/photos')
        closeForm()
    }

    return (
        <div className="photo__pageForm">
            <div className="photo__pageForm__header">
                <header className='photo__createHeader'>Edit Your Photo</header>
            </div>
            <div className="photoPage__form__form">
                <form
                    className='photo__form'
                    onSubmit={photoEdit}
                >
                    <label htmlFor='content'>
                        {/* Enter Description */}
                        <input
                            className='photo__content'
                            type='text'
                            // placeholder={contents}
                            value={contents}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>

                    {/* <label htmlFor='image'>
                        Enter Image Link
                        <input
                            type="file"
                            onChange={updateFile}
                        />
                    </label> */}


                    <label htmlFor='photoDrowpown'>
                        <select value={albumChoice} onChange={(e) => setAlbumChoice(e.target.value)}>
                            <option
                                className='photo__albumSelect'
                                disabled>Select An Album</option>
                            {filteredAlbum.map(choice => (
                                <option key={choice.id} value={choice.id}>{choice.title}</option>
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
                    
                    <div className="photo__buttons">
                        <button
                            className='photo__buttonphoto'
                            type='submit'
                        // disabled={errors.length > 0}
                        >
                            SUBMIT
                        </button>
                        <button
                            type='button'
                            className='photo__buttonDelete'

                            onClick={() => {
                                const confirm = window.confirm(
                                    'Are you sure you want to delete this photo?'
                                )
                                if (confirm === true) {
                                    dispatch(deletePhoto(choice.id))
                                    history.push('/dashboard/photos')
                                }
                                closeForm()
                            }}
                        >
                            DELETE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPhoto
