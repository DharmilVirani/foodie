import React from 'react'
import { withRouter } from 'react-router'
import { Input } from 'antd'

const Navbar = ({ history }) => {
    const route = history?.location?.pathname || window.location.pathname
    const noNavPage = ['/signup', '/login']

    if (noNavPage.includes(route)) return null

    // TODO: kabhi kabhi navbar nahi aati

    const title = 'Foodie'

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <span className='navbar-title'>{title}</span>
                    <Input />
                </div>
                <div>Dropdown</div>
                {/* if logged in -> show logout and home, profile,setting
              if not logged in show login signup */}
            </div>
        </>
    )
}

export default withRouter(Navbar)
