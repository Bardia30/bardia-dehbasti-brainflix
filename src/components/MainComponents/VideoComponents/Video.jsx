import React from 'react';
import './Video.scss';
import Controls from './Controls';

export default function Video(props) {
    return (
        <div className='video'>
            <video className='video__video-element' poster={props.imageURL}></video>
            <Controls/>
        </div>
    )
}