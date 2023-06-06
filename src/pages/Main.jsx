import React, { useState } from 'react';
import Video from '../components/MainComponents/VideoComponents/Video';
import MainBottomSection from '../components/MainComponents/MainBottomSection/MainBottomSection';
import detailVideosData from '../data/video-details.json';
import videosDataJson from '../data/videos.json';

export default function Main() {
    
    const [currentVideo, setCurrentVideo] = useState(detailVideosData[0])
    const [videosData, setVideosData] = useState(videosDataJson) //ask if this is ok for 1st comment line
    
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