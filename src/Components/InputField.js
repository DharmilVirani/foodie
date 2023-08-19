import React from 'react'
import { Input } from 'antd'

const InputField = ({ error = false, label = null, type, ...props }) => {
    const Component = type === 'password' ? Input.Password : type === 'search' ? Input.Search : Input

    return (
        <div>
            {label && <label>{label}</label>}
            <Component
                status={error ? 'error' : undefined}
                style={{ borderColor: error ? '#c98505' : undefined }}
                {...props}
            />
            <span
                style={{
                    fontSize: '11px',
                    color: '#c98505',
                    marginLeft: '5px',
                }}
            >
                {error}
            </span>
        </div>
    )
}

export default InputField
