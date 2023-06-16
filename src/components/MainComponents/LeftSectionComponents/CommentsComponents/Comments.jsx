import React from 'react';
import './Comments.scss';
import UserImage from '../../../HeaderComponents/UserImage';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';



export default function Comments ({ commentsArray, currentVideoId, setVideoDetailsData }) {
    return (
        <section className='comments'>
            <h3 className='comments__number-of-comments'>{commentsArray.length} Comments</h3>
            <section className='comments__new-comment'>
                <UserImage display="navbar__user-tabdesk"/>
                <UserImage display="navbar__user-mobile" />
                <CommentForm commentsArray={commentsArray} setVideoDetailsData={setVideoDetailsData}  currentVideoId={currentVideoId}/>
            </section>
            <CommentsList commentsArray = {commentsArray}/>
        </section>
    )
}