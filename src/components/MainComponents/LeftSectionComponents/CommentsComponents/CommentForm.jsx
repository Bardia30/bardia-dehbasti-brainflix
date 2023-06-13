import React from 'react';
import './Comments.scss';
import commentIcon from '../../../../assets/Icons/add_comment.svg';
import Search from '../../../HeaderComponents/Search';
import Upload from '../../../HeaderComponents/Upload';






export default function CommentForm() {
    return (
        <form type="submit" className='comments__form'>
            <div className='comments__form-section'>
                <label className='comments__input-label'>join the conversation</label>
                <Search classSearch="comments__search-section" src={null} inputClass="navbar__search-input" placeHolder="Add a new comment" />
            </div>
            <Upload classUpload="comments__cta" classImg="comments__cta-icon" classText="comments__cta-text" icon={commentIcon} alt="comment-icon" text="comment" />
        </form>
    )
}