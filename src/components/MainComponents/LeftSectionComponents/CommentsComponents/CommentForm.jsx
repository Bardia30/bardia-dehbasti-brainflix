import React from 'react';
import './Comments.scss';
import commentIcon from '../../../../assets/Icons/add_comment.svg';
import Search from '../../../HeaderComponents/Search';
import Upload from '../../../HeaderComponents/Upload';






export default function CommentForm() {
    return (
        <form type="submit" className='comments__form'>
            <div className='comments__form-section'>
                <label className='comments__label'>join the conversation</label>
                <textarea type="text" placeholder='Add a new comment' className='comments__input'/>
            </div>
            <Upload classUpload="comments__cta" classImg="comments__cta-icon" classText="comments__cta-text" icon={commentIcon} alt="comment-icon" text="comment" />
        </form>
    )
}