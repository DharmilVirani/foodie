import React from 'react'
import { withRouter } from 'react-router'
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
                      key: '2',
                      onClick: () => {},
                  },
                  {
                      // TODO: other page -> home baki cart
                      label: 'Cart/Home',
                      key: '2',
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
                    <div className='navbar-title'>{title}</div>
                    <InputField
                        placeholder='Search for Food, Cuisine and Restaurants'
                        onSearch={(e) => console.log(e)}
                        style={{
                            width: 500,
                        }}
                        type='search'
                    />
                </div>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <UnorderedListOutlined style={{ color: 'white' }} />
                </Dropdown>
            </div>
        </>
    )
}

export default withRouter(Navbar)
