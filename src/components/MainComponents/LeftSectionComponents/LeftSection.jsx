import React from 'react';
import './LeftSection.scss';
import Description from './DescriptionComponents/Description';
import Comments from './CommentsComponents/Comments';



export default function LeftSection({ currentVideo, currentVideoId, setVideoDetailsData}) {
    return (
        <div className='left-section'>
            <Description currentVideo={currentVideo}/>
            <Comments setVideoDetailsData={setVideoDetailsData} currentVideoId={currentVideoId} currentVideo={currentVideo}/>
        </div>
    )
}