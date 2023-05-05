import React from 'react';



export default function VideoCard(props) {
    return (
        <section className='video-card'>
            <div className='video-card__pic-parent'>
                <img className="video-card__pic" src={props.url} alt={props.altText}/>
            </div>
            <div className='video-card__texts'>
                <h3 className='video-card__title'>{props.title}</h3>
                <p className='video-card__author'>{props.channel}</p>
            </div>
            
        </section>
    )
}