import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import Album from '../Album/LoadAlbum'
import Photo from '../Photo/LoadPhoto'
import './Dashboard.css'

const Dashboard = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div className="dashboard__page">
            <div className="dashboard__profile">
                <div className="dashboard__avatar">
                <img src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" alt="" />
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
