import React from 'react';
import Video from './VideoComponents/Video';
import Articles from './ArticlesComponents/Articles';
import LeftSection from './LeftSectionComponents/LeftSection';

export default function Main() {
    return (
        <main className='main'>
            <Video imageURL="https://i.imgur.com/l2Xfgpl.jpg"/>
            <LeftSection/>
            <Articles/>
        </main>
    )
}