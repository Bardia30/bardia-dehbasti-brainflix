import React from 'react';
import StatisticsSub from './StatisticsSub';
import viewIcon from '../../../../assets/Icons/views.svg';
import likesIcon from '../../../../assets/Icons/likes.svg';



export default function Statistics() {
    return (
        <section className='description__statistics'>
            <StatisticsSub
                className="description__statistics--left"
                icon={viewIcon}
                count="1,001,023"
            />
            <StatisticsSub
                className="description__statistics--right"
                icon={likesIcon}
                count="110,985"
            />
        </section>
    )
}