import React, { useState } from 'react';
import Video from './VideoComponents/Video';
import MainBottomSection from './MainBottomSection/MainBottomSection';
import detailVideosData from '../../data/video-details.json';
import videosData from '../../data/videos.json';

export default function Main() {
    
    const [currentVideo, setCurrentVideo] = useState(detailVideosData[0])
    
    
    const handleVideoSelect = (id) => {
        detailVideosData.forEach(video => {
            if (id === video.id){
                setCurrentVideo(video)
            }
        })
    }
    
    
    return (
        <main className='main'>
            <Video imageURL={currentVideo.image}/>
            <MainBottomSection videosData={videosData} currentVideo={currentVideo} handleVideoSelect={handleVideoSelect}/>
        </main>
    )
}