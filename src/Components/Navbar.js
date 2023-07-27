import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
export default function Navbar(props) {
    return (
        <>
            <div>
                <nav class='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <span className='navbar-brand'>{props.title}</span>
                        <Link className='navbar-brand' to='/'>
                            {props.homeText}
                        </Link>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <form className='d-flex' role='search'>
                                <input
                                    className='form-control me-2'
                                    type='search'
                                    placeholder='Search for restaurant, cuisine or dish . . .'
                                    aria-label='Search'
                                    style={{ border: '1 px', borderColor: 'black', width: 450, marginLeft: 95 }}
                                />
                                <button className='btn btn-outline-success' type='submit'>
                                    Search
                                </button>
                            </form>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <Link className='nav-a ' aria-current='page' to='/login'>
                                        {props.loginText}
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-a' to='/signup'>
                                        {props.signinText}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    signinText: PropTypes.string.isRequired,
    loginText: PropTypes.string.isRequired,
}
Navbar.defaultProps = { title: 'Set Title Here', signinText: 'signin', loginText: 'login', homeText: 'Home' }
