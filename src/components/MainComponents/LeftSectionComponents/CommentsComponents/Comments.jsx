import React, {useState} from 'react';
import './Comments.scss';
import UserImage from '../../../HeaderComponents/UserImage';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';



export default function Comments ({ commentsArray, currentVideoId, setVideoDetailsData }) {
    const [commentDeleted, setCommentDeleted] = useState(false);

    return (
        <section className='comments'>
            <h3 className='comments__number-of-comments'>{commentsArray.length} Comments</h3>
            <section className='comments__new-comment'>
                <UserImage display="navbar__user-tabdesk"/>
                <UserImage display="navbar__user-mobile" />
                <CommentForm commentDeleted={commentDeleted} commentsArray={commentsArray} setVideoDetailsData={setVideoDetailsData}  currentVideoId={currentVideoId}/>
            </section>
            <CommentsList currentVideoId={currentVideoId} setCommentDeleted={setCommentDeleted} commentsArray = {commentsArray}/>
        </section>
    )
}