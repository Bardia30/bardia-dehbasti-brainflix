import React from 'react';
import './Header.scss';

export default function SearchSection (props){
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    )
}