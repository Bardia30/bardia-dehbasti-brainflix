import React from 'react';
import '../HeaderComponents/Header.scss';


export default function Nav(props) {
    return (
        <nav className='navbar'>
            {props.children}
        </nav>
    )
}
