import React from 'react';
import UserImage from '../../../HeaderComponents/UserImage';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

export default function Comments () {
    return (
        <section className='comments'>
            <h3 className='comments__number-of-comments'>3 Comments</h3>
            <section className='comments__new-comment'>
                <UserImage display="navbar__user-tabdesk"/>
                <UserImage display="navbar__user-mobile" />
                <CommentForm />
            </section>
            <CommentsList />
        </section>
    )
}