import React, { useState } from 'react';
import './Video.scss';
import Controls from './Controls';

export default function Video({ imageUrl, videoUrl }) {
    
    const [isPlaying, setIsPlaying] = useState(false);
    
    const handlePlayButton = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className='video'>
            <video src={videoUrl} autoPlay={isPlaying} className='video__video-element' poster={imageUrl}></video>
            <Controls handlePlayButton={handlePlayButton}/>
        </div>
    )
}