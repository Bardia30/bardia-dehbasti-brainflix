import React from 'react';
import './Comments.scss';
// import deleteIcon from '../../../../assets/Icons/trash-2.svg';

export default function Comment(props) {

    const handleDeleteButton = () => {
        props.sendDeleteRequest(props.videoId, props.commentId);
    }

    return (
        <section className="previous-comment">
            <div className="previous-comment__pic-placeholder"></div>
                <div className="previous-comment__texts">
                    <div className="previous-comment__texts-top">
                        <p className="previous-comment__name">{props.userName}</p>
                        <div className='previous-comment__delete-and-date'>
                            <svg onClick={handleDeleteButton} className='previous-comment__delete' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            <p className="previous-comment__date">{props.date}</p>
                        </div>
                        
                    </div>
                    <p className="previous-comment__long-paragraph">{props.commentText}</p>
            </div>
        </section>
    )
}