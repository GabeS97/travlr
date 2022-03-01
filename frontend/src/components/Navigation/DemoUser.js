import React from 'react'
import * as actionSesh from '../../store/session'
import { useDispatch } from 'react-redux'
const DemoUser = () => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()

        const credential = 'Demo-lition'
        const password = 'password'

        dispatch(actionSesh.login({ credential, password }))
    }
    return (
        <button id='demo_button' onClick={handleClick} type="submit">Demo</button>
    )
}

export default DemoUser
