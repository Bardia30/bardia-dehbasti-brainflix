import React from 'react';
import './Header.scss';

export default function RightSection (props) {
    return (
        <div className="navbar__right-section">
            {props.children}
        </div>
    )
}