import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFromModal';
import './Navigation.css';
import SearchBar from './SearchBar';

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
                    <div className="home__home">
                        <div className="home__goHome">
                            <NavLink className='home__mainPage' exact to="/">
                                <img
                                    className='home__logo'
                                    src='../../travlr.png'
                                    alt='' />
                            </NavLink>
                        </div>

                        <div className="home__exploreAll">
                            {sessionUser ?
                                <NavLink to='/view-all'>
                                    <button className='home__explore'>Explore</button>
                                </NavLink> : null
                            }
                        </div>
                    </div>
                </div>

                <div className="home__options">
                </div>

                    <SearchBar />
                <div className="home__buttons">
                    {isLoaded && sessionLinks}
                </div>
            </nav>
        </>
    );
}

export default Navigation;
