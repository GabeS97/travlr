
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addComment } from '../../../store/comments'
import './CreateComment.css'
const CreateComment = () => {
    const dispatch = useDispatch()
    const { photoId } = useParams()
    const user = useSelector(state => state.session.user)

    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            userId: user?.id,
            imageId: photoId,
            title,
            comment
        }
        const createdComments = await dispatch(addComment(payload))

    }
    return (
        <div className='create__fornComment'>
            <form onSubmit={handleSubmit} action="/form/submit" method="POST">
                {/* <div className="comment__inputFields"> */}
                    <input className='comment__title' placeholder='Enter Title of Commnet' required onChange={(e) => setTitle(e.target.value)} />
                    <textarea className="comment" placeholder='Type your comment here.' required onChange={(e) => setComment(e.target.value)}></textarea>
                    <br />

                {/* </div> */}
                <div className="create__commentSubmit">
                    <button type='submit'className='create__submitComment'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default CreateComment
