import React from 'react';
import './Articles.scss';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
// import videoData from '../../../data/videos.json';





export default function Articles({ currentVideo, videosData}){
    return (
        <section className='articles'>
            <h3 className='articles__title'>next videos</h3>
            {videosData
                .filter(video => video.id !== currentVideo.id)
                .map(video => {
                return (
                    <Link className='articles__link' key = {video.id} to={`/${video.id}`}>
                        <VideoCard
                            key = {video.id}
                            url={video.image}
                            title={video.title}
                            channel={video.channel}
                        />
                    </Link>
                )
            })}
        </section>
    )
}