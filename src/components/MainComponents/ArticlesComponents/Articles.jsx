import React from 'react';
import './Articles.scss';
import VideoCard from './VideoCard';
// import videoData from '../../../data/videos.json';





export default function Articles({ currentVideo, videosData, handleVideoSelect }){
    return (
        <section className='articles'>
            <h3 className='articles__title'>next videos</h3>
            {videosData
                .filter(video => video.id !== currentVideo.id)
                .map(video => {
                return (
                    <VideoCard
                        handleVideoSelect={() => handleVideoSelect(video.id)}
                        key = {video.id}
                        url={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                )
            })}
        </section>
    )
}