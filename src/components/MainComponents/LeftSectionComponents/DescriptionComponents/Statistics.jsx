import React from 'react';
import './Description.scss';
import StatisticsSub from './StatisticsSub';
import viewIcon from '../../../../assets/Icons/views.svg';
import likesIcon from '../../../../assets/Icons/likes.svg';



export default function Statistics({ currentVideo }) {
    return (
        <section className='description__statistics'>
            <StatisticsSub
                className="description__statistics--left"
                icon={viewIcon}
                count={currentVideo.views}
                description="views-icon"
            />
            <StatisticsSub
                className="description__statistics--right"
                icon={likesIcon}
                count={currentVideo.likes}
                description="likes-icon"
            />
        </section>
    )
}