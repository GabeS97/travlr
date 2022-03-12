import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFromModal';
import Explore from '../Explore';

import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }

    return (
        <>
            <nav className='home__navBar'>
                <div className="home__rightButtons">
                    <NavLink className='home__mainPage' exact to="/">
                        <img
                            className='home__logo'
                            src='../../travlr.png'
                            alt='' />
                    </NavLink>

                    {sessionUser ?
                        <NavLink to='/view-all'>
                            <button className='home__explore'>Explore</button>
                        </NavLink> : null
                    }

                </div>
                <div className="home__options">
                </div>

                <div className="home__searchbar">
                    <input
                        className='home__search'
                        placeholder='This is just for the aesthetics, the actual bar is disabled. Sorry, come again another time'
                        disabled
                    >
                    </input>
                </div>
                <div className="home__buttons">
                    {isLoaded && sessionLinks}
                </div>
            </nav>
        </>
    );
}

export default Navigation;
