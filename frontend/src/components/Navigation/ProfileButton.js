import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout())

        history.push('/')
    };

    return (
        <>
            {/* <button onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                        {!user && (
                            <Redirect to='/' />
                        )}
                    </li>
                </ul>
            )} */}
            <div className="dropdown__header">
                <div className="dropdown__button">
                    <div className="dropdown__link" onClick={openMenu} >
                        <img src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" alt="" />
                        {/* <img src="https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png" alt="" /> */}
                        {/* <i className="fas fa-user-circle" /> */}
                        {/* Dropdown */}
                    </div>

                    {showMenu && (

                        <div className="dropdown__menu">
                            <ul className="profile-dropdown">
                                <>{user.username}</>
                                <>{user.email}</>
                                <>
                                    <button className='dropdown__button' onClick={logout}>Log Out</button>
                                    {/* {!user && <Redirect to='/' />} */}
                                </>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProfileButton;
