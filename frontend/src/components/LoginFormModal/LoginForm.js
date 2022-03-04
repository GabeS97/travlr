import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import DemoUser from "../Navigation/DemoUser";

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

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
        <form className='modal__loginForm' onSubmit={handleSubmit}>
            <header className="model__loginTitle">Log In</header>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <div className="modal__loginInputs">
                <label className="modal__user">
                    Username or Email
                    <input className="modal__loginUser"
                        type="text"
                        value={credential}
                        placeholder='Username and Email'
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label className="modal__password">
                    Password
                    <input
                        className="modal__loginPassword"
                        type="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="modal__buttons">
                <button className='modal__loginSubmit' type="submit">Log In</button>
                <DemoUser className='modal__demo' />
            </div>
        </form>
    );
}

export default LoginForm;
