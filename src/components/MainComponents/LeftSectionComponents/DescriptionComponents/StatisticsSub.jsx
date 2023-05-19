import React from 'react';
import './Description.scss';



export default function StatisticsSub(props) {
    return (
        <div className={props.className}>
            <img className='description__stat-icon' src={props.icon}></img>
            <p className='description__stat-count'>{props.count}</p>
        </div>
    )
}