import React from 'react';


export default function Comment(props) {
    return (
        <section className="previous-comment">
            <div className="previous-comment__pic-placeholder"></div>
                <div className="previous-comment__texts">
                    <div className="previous-comment__texts-top">
                        <p className="previous-comment__name">{props.userName}</p>
                        <p className="previous-comment__date">{props.date}</p>
                    </div>
                    <p className="previous-comment__long-paragraph">{props.commentText}</p>
            </div>
        </section>
    )
}