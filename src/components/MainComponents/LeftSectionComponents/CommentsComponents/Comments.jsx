import React from 'react';
import UserImage from '../../../HeaderComponents/UserImage';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import videoDetailsData from '../../../../data/video-details.json';

export default function Comments () {
    let currentVideoData = videoDetailsData[0];
    let commentsArray = currentVideoData.comments;

    return (
        <section className='comments'>
            <h3 className='comments__number-of-comments'>{commentsArray.length} Comments</h3>
            <section className='comments__new-comment'>
                <UserImage display="navbar__user-tabdesk"/>
                <UserImage display="navbar__user-mobile" />
                <CommentForm />
            </section>
            <CommentsList currentVideoData = {commentsArray}/>
        </section>
    )
}