import React from 'react';
import './Description.scss';

export default function DescriptionTitle (props) {
    return (
        <h1 className='description__title'>{props.title}</h1>
    )
}