import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getComments } from '../../store/comments'
import { getUsers } from '../../store/users'
import './Comment.css'

const Comment = () => {
    const dispatch = useDispatch();
    const { photoId } = useParams();
    const comments = useSelector(state => state.comments);
    const comment = Object.values(comments)
    // const users = useSelector(state => console.log(state, '<<<<<<<<<<<<<<<<'))
    const picComment = comment.filter(ele => ele.imageId === +photoId)

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(getUsers())
    // }, [dispatch])



    return (
        <>
            <h2 className='tester'>Leave a Comment</h2>
            <div className="comment__page">
                <div className='comment__card'>
                    {picComment.map(feedback => (
                        <div key={feedback.id}className='comment__box'>
                            <p className='comment__comment'>{feedback.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Comment
