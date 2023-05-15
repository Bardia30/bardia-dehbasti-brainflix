import React from 'react';
import StatisticsSub from './StatisticsSub';
import viewIcon from '../../../../assets/Icons/views.svg';
import likesIcon from '../../../../assets/Icons/likes.svg';



export default function Statistics(props) {
    return (
        <section className='description__statistics'>
            <StatisticsSub
                className="description__statistics--left"
                icon={viewIcon}
                count={props.videoDetailsData.views}
            />
            <StatisticsSub
                className="description__statistics--right"
                icon={likesIcon}
                count={props.videoDetailsData.likes}
            />
        </section>
    )
}