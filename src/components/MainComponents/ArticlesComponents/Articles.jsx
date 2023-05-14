import React from 'react';
import VideoCard from './VideoCard';
import videoData from '../../../data/videos.json';





export default function Articles(){
    
    videoData.forEach(video => {
        video.isPlaying = false
    })
    videoData[0].isPlaying=true;
    
    return (
        <section className='articles'>
            <h3 className='articles__title'>next videos</h3>
            {videoData
                .filter(video =>{
                    return !video.isPlaying ;
                })
                .map(video => {
                return (
                    <VideoCard
                        url={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                )
            })}
        </section>
    )
}