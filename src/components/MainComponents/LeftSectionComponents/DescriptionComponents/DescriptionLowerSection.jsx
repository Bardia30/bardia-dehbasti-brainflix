import React from 'react';
import './Description.scss';
import AuthorDate from './AuthorDate';
import Statistics from './Statistics';



export default function DescriptionLowerSection({ currentVideo, setVideoDetailsData }) {
    
    return (
        <div className='description__lower-section'>
            <AuthorDate currentVideo={currentVideo}/>
            <Statistics setVideoDetailsData={setVideoDetailsData} currentVideo={currentVideo}/>
        </div>
    )
}