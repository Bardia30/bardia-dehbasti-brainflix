import React from 'react';
import DescriptionLowerSection from './DescriptionLowerSection';
import DescriptionLongText from './DescriptionLongText';
import DescriptionTitle from './DescriptionTitle';


export default function Description () {
    return (
        <section className='description'>
            <DescriptionTitle />
            <DescriptionLowerSection />
            <DescriptionLongText />
        </section>
    )
}