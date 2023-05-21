import React from 'react';
import './Header.scss';


export default function UploadSection (props) {
    return (
        <button type='submit' className={props.sectionClass}>
            {props.children}
        </button>
    )
}