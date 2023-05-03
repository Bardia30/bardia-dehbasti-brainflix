import React from 'react';
import Video from './VideoComponents/Video';
import MainBottomSection from './MainBottomSection/MainBottomSection';


export default function Main() {
    return (
        <main className='main'>
            <Video imageURL="https://i.imgur.com/l2Xfgpl.jpg"/>
            <MainBottomSection />
        </main>
    )
}