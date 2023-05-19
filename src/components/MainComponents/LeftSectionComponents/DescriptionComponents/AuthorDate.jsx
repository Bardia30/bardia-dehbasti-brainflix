import React from 'react';
import './Description.scss';
import {convertDate} from '../CommentsComponents/CommentsList';


export default function AuthorDate(props) {
    let dateConverted = convertDate(props.videoDetailsData.timestamp)
    
    return (
        <section className='description__author-date'>
            <h3 className='description__author'>By {props.videoDetailsData.channel}</h3>
            <p className='description__date'>{dateConverted}</p>
        </section>
    )
}