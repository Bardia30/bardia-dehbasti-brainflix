import React from 'react';
import './LeftSection.scss';
import Description from './DescriptionComponents/Description';
import Comments from './CommentsComponents/Comments';



export default function LeftSection({ currentVideo }) {
    return (
        <div className='left-section'>
            <Description currentVideo={currentVideo}/>
            <Comments currentVideo={currentVideo}/>
        </div>
    )
}