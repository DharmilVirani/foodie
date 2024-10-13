import React from 'react'
import './Usermenu/NotFound.css'

const NotFound = () => {
    return (
        <>
            <div className='notfound-container'>
                <h1 className='notfound-statuscode'>404</h1>
                <div className='notfound-message'>
                    Sorry!! Page not found. Please check your internet connection or url.
                </div>
            </div>
        </>
    )
}

export default NotFound
