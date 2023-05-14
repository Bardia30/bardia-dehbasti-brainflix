import React from 'react';


export default function Comment(props) {
    return (
        <section className="previous-comment">
            <div class="previous-comment__pic-placeholder"></div>
                <div class="previous-comment__texts">
                    <div class="previous-comment__texts-top">
                        <p class="previous-comment__name">{props.userName}</p>
                        <p class="previous-comment__date">{props.date}</p>
                    </div>
                    <p class="previous-comment__long-paragraph">{props.commentText}</p>
            </div>
        </section>
    )
}