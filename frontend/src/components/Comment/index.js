import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../../store/comments'
import './Comment.css'
const Comment = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const comments = useSelector(state => state.comments)
    const comment = Object.values(comments)
    console.log('1. let see if our state is shown', comment)

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])
    return (
        <>
            <h1>Test</h1>
            <div className="comment__page">
                {comment.map(feedback => {
                    <div>
                        <h1>Hey</h1>
                        <h2>{feedback.comment}</h2>
                    </div>
                })}
            </div>
        </>
    )
}

export default Comment
