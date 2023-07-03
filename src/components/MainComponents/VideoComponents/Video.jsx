import React, { useState } from 'react';
import './Video.scss';
import Controls from './Controls';

export default function Video({ imageUrl }) {
    
    const [isPlaying, setIsPlaying] = useState(false);
    
    const handlePlayButton = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className='video'>
            <video autoPlay={isPlaying} className='video__video-element' poster={`http://localhost:5050/${imageUrl}`}></video>
            <Controls handlePlayButton={handlePlayButton}/>
        </div>
    )
}