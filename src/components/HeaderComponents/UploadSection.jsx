import React from 'react';
import './Header.scss';



export default function UploadSection (props) {
    
    
    return (
        <button className={props.sectionClass}>
            {props.children}
        </button>
    )
}