import React from 'react';
import AuthorDate from './AuthorDate';
import Statistics from './Statistics';



export default function DescriptionLowerSection() {
    return (
        <div className='description__lower-section'>
            <AuthorDate/>
            <Statistics/>
        </div>
    )
}