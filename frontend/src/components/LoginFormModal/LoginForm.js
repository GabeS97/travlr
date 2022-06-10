import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import DemoUser from "../Navigation/DemoUser";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
            );
        };




    return (
        <form className='login__loginForm'
        onSubmit={handleSubmit}
        >
            <header className="login__loginTitle">Log In</header>
            <ul className="login__errors">
                {errors.map((error, idx) => (
                    <div key={idx}>{error}</div>
                ))}
            </ul>
            <div className="login__loginInputs">
                <label className="login__user">
                    Username or Email
                    <input className="login__loginUser"
                        type="text"
                        value={credential}
                        placeholder='Username and Email'
                        onChange={(e) => setCredential(e.target.value)}
                    required
                    />
                </label>
                <label className="login__password">
                    Password
                    <input
                        className="login__loginPassword"
                        type="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="login__buttons">
                <button
                    className='login__loginSubmit'
                    type="submit"
                    // disabled={errors.length > 0}
                >Log In</button>
                <DemoUser className='login__demo' />
            </div>
        </form>
    );
}

export default LoginForm;
