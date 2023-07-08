import React from "react";
import './Comments.scss';
import Comment from "./Comment";
import axios from 'axios';



const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US');
}


export default function CommentsList ( { commentsArray, setCommentDeleted, currentVideoId }){
    

    const sendDeleteRequest = (videoId, commentId) => {
        axios.delete(`http://localhost:5050/videos/${videoId}/comments/${commentId}`)
            .then(res => {
                console.log(res.data);
                setCommentDeleted(true);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    
    return (
        <>
            {commentsArray.map(comment =>{
                return (
                    <Comment
                        videoId={currentVideoId}
                        sendDeleteRequest={sendDeleteRequest}
                        key = {comment.id}
                        commentId = {comment.id}
                        userName={comment.name}
                        date = {convertDate(comment.timestamp)}
                        commentText = {comment.comment}
                    />
                )
            })}
        </>
    )
}

export {convertDate};