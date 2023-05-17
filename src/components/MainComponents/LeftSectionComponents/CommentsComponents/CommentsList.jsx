import React from "react";
import Comment from "./Comment";



const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US');
}


export default function CommentsList (props){
    return (
        <>
            {props.currentVideoData.map(comment =>{
                return (
                    <Comment
                        key = {comment.id}
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