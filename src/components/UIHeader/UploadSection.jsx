import React from 'react';


export default function UploadSection (props) {
    return (
        <button type='submit' className={props.sectionClass}>
            {props.children}
        </button>
    )
}