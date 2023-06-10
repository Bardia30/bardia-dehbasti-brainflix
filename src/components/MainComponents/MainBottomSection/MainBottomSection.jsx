import React from 'react';
import './MainBottomSection.scss';
import LeftSection from '../LeftSectionComponents/LeftSection';
import Articles from '../ArticlesComponents/Articles';

export default function MainBottomSection ({ currentVideo, videosData}) {
    return (
        <div className='main-bottom-section'>
            <LeftSection currentVideo={currentVideo}/>
            <Articles videosData={videosData}  currentVideo={currentVideo}/>
        </div>
    )
}