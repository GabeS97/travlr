import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginForm from "../LoginFormModal/LoginForm";
import './SignupForm.css'

function SignupForm({ hideForm }) {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showModal, setShowModal] = useState(false)
    // if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };


    // const hideForms = () => {
    //     if (showLoginForm) {
    //         hideForm()
    //     }
    // }
    // useEffect(() => {
    //     const validationErrors = [];
    //     if (!email) validationErrors.push('Please provide a valid email.')
    //     if (username.length < 4) validationErrors.push("Please provide a username with at least 4 characters.")
    //     if (username.length < 6) validationErrors.push('Password must be 6 characters or more.')

    //     setErrors(validationErrors)
    // }, [username, email])
    return (
        <form onSubmit={handleSubmit}>
            <header className="signinTitle">Sign In</header>
            <div className="signin__errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </div>
            <div className="inputSignIn">
                <label className='signin__email'>
                    Email
                    <input className="emailSignIn"
                        placeholder="Please enter your email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Username
                    <input className="usernameSignIn"
                        placeholder="Please enter your username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input className="passwordSignIn"
                        placeholder="Please enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Confirm Password
                    <input className="confirmSignIn"
                        placeholder="Please confirm your password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="submitSignup" disabled={errors.length > 0}>Sign Up</button>

                {/* <button
                onClick={() => setShowLoginForm(true) }
                >Already Have an Account?</button> */}
                {/* {showLoginForm  && <Modal onClose={() => setShowLoginForm(false)}><LoginForm /></Modal>} */}
                {/* <button
                    onClick={switchForm}
                >Already Have An Account?</button>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginForm />
                    </Modal>
                )} */}

            </div>
        </form>
    );
}

export default SignupForm;
