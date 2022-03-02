import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
    const user = useSelector(state => state.session.user)
    console.log('this is the user console.log', user)
    return (
        <div className="dashboard__page">
            <div className="dashboard__profile">
                <div className="dashboard__avatar">
                    <h2 className='dashboard__displayName'>{user.username}</h2>
                </div>
            </div>
            <div className="dashboard__actions">
                <NavLink to='/dashboard/albums'>
                    <button>Albums</button>
                </NavLink>
                <NavLink to='/dashboard/photos'>
                    <button>Photos</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Dashboard
