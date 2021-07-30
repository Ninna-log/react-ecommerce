import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = props => {
    const className = props.type === 'primary' ? 'primary' : '';
    return (
        <button className={className}>Button</button>
    )
}