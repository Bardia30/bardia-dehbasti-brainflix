import React from 'react';
import './Description.scss';
import {convertDate} from '../CommentsComponents/CommentsList';


export default function AuthorDate({currentVideo}) {
    let dateConverted = convertDate(currentVideo.timestamp)
    
    return (
        <section className='description__author-date'>
            <h3 className='description__author'>By {currentVideo.channel}</h3>
            <p className='description__date'>{dateConverted}</p>
        </section>
    )
}