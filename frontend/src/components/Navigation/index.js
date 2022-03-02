import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFromModal';

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
        <nav className='home__navBar'>
            <NavLink className='home__mainPage' exact to="/">
                <img
                    className='home__logo'
                    src='../../travlr.png'
                    alt='' />
            </NavLink>

            <div className="home__options">
            </div>
            
            <div className="home__searchbar">
                <input
                    className='home__search'
                    placeholder='Search for photss, currently not working'
                >
                </input>
            </div>
            <div className="home__buttons">
                {isLoaded && sessionLinks}
            </div>
        </nav>
    );
}

export default Navigation;
