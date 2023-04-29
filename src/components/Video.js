import React from 'react';


export default function Video(props) {
    return (
        <div className='video'>
            <video className='video__video-element' controls="default" poster={props.imageURL}></video>
        </div>
    )
}