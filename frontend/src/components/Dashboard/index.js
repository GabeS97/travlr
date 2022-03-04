import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import Album from '../Album'
import Photo from '../Photo'
import './Dashboard.css'

const Dashboard = () => {
    const user = useSelector(state => state.session.user)
    
    return (
        <div className="dashboard__page">
            <div className="dashboard__profile">
                <div className="dashboard__avatar">
                    {user && (
                        <h2 className='dashboard__displayName'>{user.username}</h2>
                    )}
                </div>
            </div>
            <nav className="dashboard__actions">
                <NavLink className='dashboard__albums' to='/dashboard/albums'>Album
                </NavLink>
                <NavLink className='dashboard__photos' to='/dashboard/photos'>Photo
                </NavLink>
            </nav>

            <div className="dashboard__body">
                <Switch>
                    <Route path='/dashboard/albums'>
                        <Album />
                    </Route>
                    <Route path='/dashboard/photos'>
                        <Photo />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Dashboard
