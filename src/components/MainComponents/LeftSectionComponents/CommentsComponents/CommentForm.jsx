import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './Comments.scss';
import commentIcon from '../../../../assets/Icons/add_comment.svg';
import Upload from '../../../HeaderComponents/Upload';



export default function CommentForm({ currentVideoId, setVideoDetailsData, commentsArray}) {
    
    const [newComment, setNewComment] = useState("")
    
    const handleChange = (e) => {
        setNewComment(e.target.value);
    }

    const [newCommentPosted, setNewCommentPosted] = useState(false);   

    const postComment = (newComment) => {
        axios.post(`http://localhost:5050/videos/${currentVideoId}/comments`, newComment)
            .then(res => {
                console.log(res.data)
                setNewCommentPosted(true);
            })
            .catch(err => console.log(err.message))
        }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const user_comment = e.target.comment.value;
        const newComment = {
            comment: user_comment
        }
        postComment(newComment);
        setNewComment("");
    }

    useEffect(() => {
        if (newCommentPosted) {
            axios.get(`http://localhost:5050/videos/${currentVideoId}`)
            .then(res => {
                setVideoDetailsData(res.data)
            })
            .catch(err => console.log(err.message))
        }
    }, [newCommentPosted, currentVideoId, commentsArray])
    
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