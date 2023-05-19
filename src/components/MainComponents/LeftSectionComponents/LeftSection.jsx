import React from 'react';
import './LeftSection.scss';
import Description from './DescriptionComponents/Description';
import Comments from './CommentsComponents/Comments';



export default function LeftSection() {
    return (
        <div className='left-section'>
            <Description/>
            <Comments/>
        </div>
    )
}