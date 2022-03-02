import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal'
import './Splash.css'

const Splash = () => {
    return (
        <div className='splash__page'>
            <div className="splash__image">
                <img
                    src={`https://images.unsplash.com/photo-1509529711801-deac231925ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`}
                    alt='' />
            </div>

            <div className='splash__messages'>
                <h2 className='splash__text'>Find Your Inspiration</h2>
                <p className='splash__quotes'>A journey of a thousand miles begins with a single step</p>

                <NavLink className='spash__viewAll' to='/view-all'>
                    <button className='splash__explore'>
                        Explore
                    </button>
                </NavLink>
            </div>

        </div>
    )
}

export default Splash
