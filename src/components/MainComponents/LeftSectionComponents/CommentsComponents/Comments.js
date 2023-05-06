import React from 'react';
import UserImage from '../../../HeaderComponents/UserImage';
import Upload from '../../../HeaderComponents/Upload';
import commentIcon from '../../../../assets/Icons/add_comment.svg';
import Search from '../../../HeaderComponents/Search';

export default function Comments () {
    return (
        <section className='comments'>
            <h3 className='comments__number-of-comments'>3 Comments</h3>
            <section className='comments__new-comment'>
                <UserImage />
                <form type="submit" className='comments__form'>
                    <div className='comments__form-section'>
                        <label className='comments__input-label'>join the conversation</label>
                    {/* <input name='userComment' placeholder='Add a new comment' /> */}
                        <Search classSearch="comments__search-section" src={null} inputClass="navbar__search-input" placeHolder="Add a new comment" />
                    </div>
                    <Upload classUpload="navbar__upload-section" classImg="navbar__upload-icon" classText="navbar__upload-text" icon={commentIcon} alt="comment-icon" text="comment" />
                </form>
            </section>
        </section>
    )
}