import React from 'react';
import './Description.scss';



export default function StatisticsSub(props) {
    return (
        <div className={props.className}>
            <img onClick={props.onLikeClick} className='description__stat-icon' src={props.icon} alt={props.description}></img>
            <p className='description__stat-count'>{props.count}</p>
        </div>
    )
}