import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'

function SignupForm() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
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
                    // required
                    />
                </label>
                <label>
                    Username
                    <input className="usernameSignIn"
                        placeholder="Please enter your username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    // required
                    />
                </label>
                <label>
                    Password
                    <input className="passwordSignIn"
                        placeholder="Please enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    // required
                    />
                </label>
                <label>
                    Confirm Password
                    <input className="confirmSignIn"
                        placeholder="Please confirm your password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    // required
                    />
                </label>
                <button type="submit" className="submitSignup" disabled={errors.length > 0}>Sign Up</button>
            </div>
        </form>
    );
}

export default SignupForm;
