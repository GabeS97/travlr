import React from 'react'
import './Splash.css'
const Splash = () => {
    return (
        <div className='splash__page'>
            <div className="splash__image">
                <img
                    src={`https://c1.wallpaperflare.com/preview/347/993/276/road-highway-travel-asphalt.jpg`}
                    alt='' />
            </div>

            <div className='splash__messages'>
                <h2 className='splash__text'>Find Your Inspiration</h2>
                <p className='splash__quotes'>A journey of a thousand miles begins with a single step</p>
            </div>
        </div>
    )
}

export default Splash
