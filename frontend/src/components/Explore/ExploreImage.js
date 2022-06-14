import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotos } from '../../store/photos'
import './Explore.css'
import { getUsers } from '../../store/users'

const ExploreImage = () => {
    let test = [];
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const photo = Object.values(photos)
    const users = useSelector(state => state.users)
    const user = useSelector(state => state.session.user)
    const choice = photo.find(pic => pic.userId === user?.id)
    const usr = Object.values(users)

    useEffect(() => {
        dispatch(loadPhotos())
        dispatch(getUsers())
    }, [dispatch])

    for (let i = 0; i < usr.length - 1; i++) {
        let selectUser = usr[i];
        // console.log('selectUser iteration', selectUser)

        const choice = photo.find(pic => pic.userId === selectUser?.id)
        test.push(choice)

    }

    return (
        <div className='grid__container'>
            <div className="grid__images">
                {photo.map(ele => (
                    <div className='grid__image__container'>
                        <div className="image__contents">
                            <img className='image__contents' src={ele?.imageUrl} alt='' />
                        </div>

                        <div className="image__user__info__container">
                            <div className="image__user__info__container__v2">
                                <div className="image__user__info">
                                    <div>
                                        {ele?.content}
                                    </div>

                                    <div className='image__explore__tags'>
                                        {ele?.tags?.map(tag => (<p>{`#${tag}`}</p>))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image__user__name">{`@${ele?.username}`}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExploreImage
