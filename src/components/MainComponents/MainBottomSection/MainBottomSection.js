import React from 'react';
import LeftSection from '../LeftSectionComponents/LeftSection';
import Articles from '../ArticlesComponents/Articles';

export default function MainBottomSection () {
    return (
        <div className='main-bottom-section'>
            <LeftSection />
            <Articles />
        </div>
    )
}