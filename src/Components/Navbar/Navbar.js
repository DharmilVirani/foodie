import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'

import InputField from '../InputField'
import { isUserLoggedIn } from '../../util'

const Navbar = ({ history }) => {
    const route = history?.location?.pathname || window.location.pathname
    const noNavPage = ['/signup', '/login']

    const isLoggedIn = isUserLoggedIn()

    const items = (
        isLoggedIn
            ? [
                  {
                      label: 'Profile',
                      key: '4',
                      onClick: () => {
                          history.push('/profile/orders')
                      },
                  },
                  {
                      // TODO: other page -> home baki cart
                      label: 'Cart/Home',
                      key: '3',
                      onClick: () => {},
                  },
                  {
                      label: 'Settings',
                      key: '2',
                      onClick: () => {},
                  },
                  {
                      label: 'Logout',
                      key: '1',
                      onClick: () => {
                          localStorage.removeItem('token')
                          history.push('/login')
                      },
                  },
              ]
            : [
                  {
                      label: 'Login',
                      key: '0',
                      onClick: () => {
                          history.push('/login')
                      },
                  },
                  {
                      label: 'Sign Up',
                      key: '1',
                      onClick: () => {
                          history.push('/signup')
                      },
                  },
              ]
    ).map((item) => ({
        ...item,
        label: <div onClick={item.onClick}>{item.label}</div>,
    }))

    if (noNavPage.includes(route)) return null

    const title = 'foodie'

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <Link to='/' className='navbar-title'>
                        {title}
                    </Link>
                    <InputField
                        className='searchBar'
                        placeholder='Search for Food, Cuisine and Restaurants.....'
                        style={{
                            width: 500,
                        }}
                        onSearch={(e) => console.log(e)}
                        type='search'
                    />
                </div>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <UnorderedListOutlined className='list-icon' />
                </Dropdown>
            </div>
        </>
    )
}

export default withRouter(Navbar)
