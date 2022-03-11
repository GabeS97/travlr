import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getComments } from '../../store/comments'
import './Comment.css'

const Comment = () => {
    const dispatch = useDispatch();
    const { photoId } = useParams();
    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const comment = Object.values(comments)
    // const image = useSelector(stata => stata.photos);
    // const pics = Object.values(image);
    const picComment = comment.filter(ele => ele.imageId === +photoId)
    console.log(picComment)
    // console.log('this is the comment that we have for single pics', picComment)
    console.log('1. let see if our state is shown', comment);

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])
    return (
        <>
            <div className="comment__page">
                {picComment.map(feedback => {
                    <div key={feedback.id} className='comment__card'>
                        <h2 className='comment__comment '>{feedback.comment}</h2>
                    </div>
                })}
            </div>
        </>
    )
}

export default Comment
