import React from 'react';
import './Description.scss';
import DescriptionLowerSection from './DescriptionLowerSection';
import DescriptionLongText from './DescriptionLongText';
import DescriptionTitle from './DescriptionTitle';
// import videoDetailsData from '../../../../data/video-details.json';


export default function Description ({ currentVideo, setVideoDetailsData }) {
    return (
        <section className='description'>
            <DescriptionTitle title={currentVideo.title}/>
            <DescriptionLowerSection setVideoDetailsData={setVideoDetailsData} currentVideo={currentVideo}/>
            <DescriptionLongText description={currentVideo.description}/>
        </section>
    )
}