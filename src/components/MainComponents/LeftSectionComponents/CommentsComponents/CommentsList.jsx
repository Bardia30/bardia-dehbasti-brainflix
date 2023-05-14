import React from "react";
import Comment from "./Comment";
import videoDetails from '../../../../data/video-details.json';

const currentVideoComments = videoDetails[0].comments;

const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
}


export default function CommentsList (props){
    return (
        <>
            {currentVideoComments.map(comment =>{
                return (
                    <Comment
                        userName={comment.name}
                        date = {convertDate(comment.timestamp)}
                        commentText = {comment.comment}
                    />
                )
            })}
        </>
    )
}