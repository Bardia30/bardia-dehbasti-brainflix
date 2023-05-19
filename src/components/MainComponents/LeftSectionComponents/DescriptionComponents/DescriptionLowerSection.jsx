import React from 'react';
import './Description.scss';
import AuthorDate from './AuthorDate';
import Statistics from './Statistics';



export default function DescriptionLowerSection(props) {
    
    return (
        <div className='description__lower-section'>
            <AuthorDate videoDetailsData={props.videoDetailsData}/>
            <Statistics videoDetailsData={props.videoDetailsData}/>
        </div>
    )
}