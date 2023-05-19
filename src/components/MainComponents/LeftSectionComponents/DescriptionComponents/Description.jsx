import React from 'react';
import './Description.scss';
import DescriptionLowerSection from './DescriptionLowerSection';
import DescriptionLongText from './DescriptionLongText';
import DescriptionTitle from './DescriptionTitle';
import videoDetailsData from '../../../../data/video-details.json';


export default function Description () {
    return (
        <section className='description'>
            <DescriptionTitle title={videoDetailsData[0].title}/>
            <DescriptionLowerSection videoDetailsData={videoDetailsData[0]}/>
            <DescriptionLongText description={videoDetailsData[0].description}/>
        </section>
    )
}