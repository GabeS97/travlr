import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getComments } from '../../../store/comments'
import { getUsers } from '../../../store/users'
import CreateComment from '../CreateComment'
import './Comment.css'

const Comment = () => {
    const dispatch = useDispatch();
    const { photoId } = useParams();
    const comments = useSelector(state => state.comments);
    const comment = Object.values(comments)
    const users = useSelector(state => state.users)

    const picComment = comment.filter(ele => ele.imageId === +photoId)

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])



    return (
        <>
            <h2 className='tester'>Leave a Comment</h2>
            <div className="comment__page">
                <div className='comment__card'>
                    {picComment.map(feedback => (
                        <div key={feedback.id} className='comment__box'>
                            <h3>{feedback.title}</h3>
                            <p className='comment__comment'>{feedback.comment}</p>
                        </div>
                    ))}
                    <CreateComment />
                </div>
            </div>
        </>
    )
}

export default Comment
