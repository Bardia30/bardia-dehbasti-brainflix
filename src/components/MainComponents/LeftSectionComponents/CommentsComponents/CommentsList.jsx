import React from "react";
import './Comments.scss';
import Comment from "./Comment";
import axios from 'axios';
import { useParams } from "react-router-dom";



const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US');
}


export default function CommentsList ( { commentsArray, setCommentDeleted }){
    
    const params = useParams();
    const { videoId } = params; 


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
                        videoId={videoId}
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