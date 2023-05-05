import React from 'react';
import VideoCard from './VideoCard';
import videoData from '../../../data/videos.json';





export default function Articles(){
    return (
        <section className='articles'>
            <h3 className='articles__title'>next videos</h3>
            <VideoCard
                url={videoData[1].image}
                title={videoData[1].title}
                channel={videoData[1].channel}
            />
            <VideoCard
                url={videoData[2].image}
                title={videoData[2].title}
                channel={videoData[2].channel}
            />
            <VideoCard
                url={videoData[3].image}
                title={videoData[3].title}
                channel={videoData[3].channel}
            />
            <VideoCard
                url={videoData[4].image}
                title={videoData[4].title}
                channel={videoData[4].channel}
            />
            <VideoCard
                url={videoData[5].image}
                title={videoData[5].title}
                channel={videoData[5].channel}
            />
            <VideoCard
                url={videoData[6].image}
                title={videoData[6].title}
                channel={videoData[6].channel}
            />
            <VideoCard
                url={videoData[7].image}
                title={videoData[7].title}
                channel={videoData[7].channel}
            />
            <VideoCard
                url={videoData[8].image}
                title={videoData[8].title}
                channel={videoData[8].channel}
            />
        </section>
    )
}