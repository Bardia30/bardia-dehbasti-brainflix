import React, { useState } from 'react';
import './Comments.scss';
import commentIcon from '../../../../assets/Icons/add_comment.svg';
import Upload from '../../../HeaderComponents/Upload';






export default function CommentForm(props) {
    
    const [newComment, setNewComment] = useState("")
    
    const handleChange = (e) => {
        setNewComment(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const user_comment = e.target.comment.value;
        const newComment = {
            "name" : "Nigel",
            "comment": user_comment
        }
        props.postComment(newComment);
        setNewComment("");
    }
    
    return (
        <form onSubmit={handleSubmit} type="submit" className='comments__form'>
            <div className='comments__form-section'>
                <label className='comments__label'>join the conversation</label>
                <textarea name='comment' value={newComment} onChange={handleChange} type="text" placeholder='Add a new comment' className='comments__input'/>
            </div>
            <Upload classUpload="comments__cta" classImg="comments__cta-icon" classText="comments__cta-text" icon={commentIcon} alt="comment-icon" text="comment" />
        </form>
    )
}