import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CreatePhoto = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    
    return (
        <div>CreatePhoto</div>
    )
}

export default CreatePhoto
