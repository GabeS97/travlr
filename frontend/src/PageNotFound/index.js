import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './PageNotFound.css'

const PageNotFound = () => {
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    const handleDirect = (e) => {
        e.preventDefault()

        if (user) {
            history.push('/dashboard')
        } else {
            history.push('/view-all')
        }
    }
    return (
        <div className="page__notFound">
            <h2>Oops! Unfortunately The Page You Are Looking For Does Not Exist.</h2>
            <h1>404</h1>
            <p>Thanks for Visiting! Come Again Soon!</p>
            <button href="#"
                onClick={handleDirect}
            >TAKE ME HOME</button>
        </div>
    )
}

export default PageNotFound
