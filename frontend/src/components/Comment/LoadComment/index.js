import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, useParams, useHistory } from 'react-router-dom'
import { Modal } from '../../../context/Modal'
import { getComments, removeComment } from '../../../store/comments'
import { getUsers } from '../../../store/users'
import CreateComment from '../CreateComment'
import EditComment from '../EditComment'
import './Comment.css'

const Comment = () => {
    const dispatch = useDispatch();
    const { photoId } = useParams();
    const history = useHistory()
    const comments = useSelector(state => state.comments);
    const comment = Object.values(comments)
    const users = useSelector(state => state.users)

    const user = Object.values(users)
    const sessoinUser = useSelector(state => state.session.user)
    const myComment = comment.find(myFeed => myFeed.userId === sessoinUser.id)
    const [showModal, setShowModal] = useState(false)

    const picComment = comment.filter(ele => ele.imageId === +photoId)

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    const hideForm = () => {
        setShowModal(false)
    }

    return (
        <div className="comment__page">
            <div className="comment__leaveAComment">
                <h2 className='tester'>Leave a Comment</h2>
            </div>
            <div className='comment__card'>
                {picComment.map(feedback => (
                    <div>
                        {feedback.userId === sessoinUser.id && (
                                <div className="comment__editNDelete">
                                    <NavLink className='comment__editLink' to={`/dashboard/photos/view/${photoId}/comment/${feedback.id}`}>
                                        <i class="fa-solid fa-magnifying-glass" onClick={() => setShowModal(true)}></i>
                                    </NavLink>
                                </div>
                            )}

                        {showModal && (
                            <Route path='/dashboard/photos/view/:photoId/comment/:commentId'>
                                <Modal onClose={() => setShowModal(false)}>
                                    <EditComment comments={feedback} hideForm={hideForm} />
                                </Modal>
                            </Route>
                        )}

                        <div key={feedback?.id} className='comment__box'>
                            <h3>{`@${feedback?.username}`}</h3>
                            <h4>{feedback?.title}</h4>
                            <p className='comment__comment'>{feedback?.comment}</p>
                        </div>
                    </div>
                ))}
                <div className="comment__createComment">
                    <CreateComment />
                </div>
            </div>
        </div>

    )
}

export default Comment
