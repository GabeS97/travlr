import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { putComment, removeComment } from '../../../store/comments';
import './EditComment.css'

const EditComment = ({ comments, hideForm }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { photoId, commentId } = useParams(); // photoId is string
    const { id, userId, imageid, comment, title } = comments; // id => commentId
    const commentSelector = useSelector(state => state.comments)
    const commentSelected = Object.values(commentSelector)
    const choice = commentSelected.find(ele => ele.id === +commentId)

    const [titleMatch, setTitleMatch] = useState(choice?.title ? choice?.title : '')
    const [commentMatch, setCommentMatch] = useState(choice?.comment ? choice?.comment : '')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            commentId: choice?.id,
            userId: choice?.userId,
            imageId: choice?.imageId,
            title: titleMatch,
            comment: commentMatch
        }
        const editedComment = await dispatch(putComment(payload))
        // history.push(`/photos/${choice.imageId}`)
        hideForm()
    }
    return (
        <div className="comment__pageForm">
            <div className="commentEdit__form__form">
                <div className="comment__editForm__header">
                    <header className='comment__editHeader'>Edit Your Photo</header>
                </div>
                <form
                    className='edit__form'
                    onSubmit={handleSubmit}

                >
                    <label htmlFor='title'>
                        {/* Enter Description */}
                        <input
                            className='album__title'
                            type='text'
                            value={titleMatch}
                            onChange={(e) => setTitleMatch(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor='comment'>
                        {/* Enter Image Link */}
                        <input
                            className='album__enterComment'
                            type='text'
                            value={commentMatch}
                            onChange={(e) => setCommentMatch(e.target.value)}
                        // required
                        />
                    </label>

                    <div className="edit__buttons">
                        <button
                            className='edit__buttonEdit'
                            type='submit'
                        // disabled={errors.length > 0}
                        >
                            EDIT
                        </button>
                        <button
                            className='edit__buttonDelete'
                            // onClick={(e) => dispatch(deleteAlbum(choice.id))}
                            onClick={() => {
                                const confrim = window.confirm(
                                    'Are you sure you want to delete this comment?'
                                )
                                if (confrim === true) {
                                    dispatch(removeComment(choice?.id))
                                }
                            }}>
                            DELETE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditComment
