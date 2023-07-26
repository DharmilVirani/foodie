import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
export default function Navbar(props) {
    return (
        <BrowserRouter>
            <div>
                <nav class='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <Link className='navbar-brand' to='/'>
                            {props.title}
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
                                    style={{ border: '1 px', borderColor: 'black', width: 450, marginLeft: 35 }}
                                />
                                <button className='btn btn-outline-success' type='submit'>
                                    Search
                                </button>
                            </form>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <Link className='nav-link ' aria-current='page' to='/login'>
                                        {props.homeText}
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/signup'>
                                        {props.aboutText}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </BrowserRouter>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired,
}
Navbar.defaultProps = { title: 'Set Title Here', aboutText: 'About', homeText: 'Home' }
