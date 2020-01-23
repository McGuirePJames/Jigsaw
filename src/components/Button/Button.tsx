import React from 'react'
import './Button.scss';

export interface ButtonProps {
    onClick?: Function
}

export const Button: React.FC<ButtonProps> = props => {
    return (
        <div className="button-component">
            <button
                type="button"
                onClick={() => {
                    props.onClick && props.onClick()
                }}
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button
