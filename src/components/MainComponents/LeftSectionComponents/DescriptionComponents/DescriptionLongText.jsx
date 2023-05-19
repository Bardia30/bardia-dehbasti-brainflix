import React from 'react';
import './Description.scss';




export default function DescriptionLongText(props) {
    return (
        <p className='description__long-text'>{props.description}
        </p>
    )
}