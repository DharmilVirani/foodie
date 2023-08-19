import React from 'react'
import { Input } from 'antd'

const InputField = ({
    name = '',
    value = '',
    label = null,
    error = false,
    placeholder = '',
    onChange = undefined,
    onBlur = undefined,
    type,
}) => {
    const Component = type === 'password' ? Input.Password : Input

    return (
        <div>
            {label && <label style={{ color: '#c98505' }}>{label}</label>}
            <Component
                status={error ? 'error' : undefined}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                style={{ borderColor: error ? '#c98505' : undefined }}
                onBlur={onBlur}
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
