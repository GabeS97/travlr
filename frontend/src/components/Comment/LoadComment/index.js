import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
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
    // const choice = user.map(ele => {
    //     const { id } = ele

    //     const match = comment.filter(feed => feed?.id === id)
    // })


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
        <>
            <h2 className='tester'>Leave a Comment</h2>
            <div className="comment__page">
                <div className='comment__card'>
                    {picComment.map(feedback => (
                        <div>
                            {feedback.userId === sessoinUser.id && (
                                <div className="comment__editNDelete">
                                    <NavLink className='comment__editLink' to={`/photos/${photoId}/comment/${feedback.id}`}>
                                        <i class="fa-solid fa-magnifying-glass" onClick={() => setShowModal(true)}></i>
                                    </NavLink>
                                </div>
                            )}

                            {showModal && (
                                <Route path='/photos/:photoId/comment/:commentId'>
                                    <Modal onClose={() => setShowModal(false)}>
                                        <EditComment comments={feedback} hideForm={hideForm} />
                                    </Modal>
                                </Route>
                            )}

                            <div key={feedback.id} className='comment__box'>
                                <h3>{feedback.title}</h3>
                                <p className='comment__comment'>{feedback.comment}</p>
                            </div>
                        </div>
                    ))}
                    <CreateComment />
                </div>
            </div>
        </>
    )
}

export default Comment
