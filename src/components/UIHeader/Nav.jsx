import React from 'react';


export default function Nav(props) {
    return (
        <nav className='navbar'>
            {props.children}
        </nav>
    )
}
