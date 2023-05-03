import React from 'react';
import viewIcon from '../../../../assets/Icons/views.svg';
import likeIcon from '../../../../assets/Icons/likes.svg';






export default function Description () {
    return (
        <section className='description'>
            <h1 className='description__title'>BMX Rampage: 2021 Highlights</h1>
            <div className='description__lower-section'>
                <section className='description__author-date'>
                    <h3 className='description__author'>By Red Crow</h3>
                    <p className='description__date'>07/11/2021</p>
                </section>
                <section className='description__statistics'>
                    <div className='description__statistics--left'>
                        <img className='description__stat-icon' src={viewIcon}></img>
                        <p className='description__stat-count'>1,001,023</p>
                    </div>
                    <div className='description__statistics--right'>
                        <img className='description__stat-icon' src={likeIcon}></img>
                        <p className='description__stat-count'>110,985</p>
                    </div>
                </section>
            </div>
            
        </section>
    )
}