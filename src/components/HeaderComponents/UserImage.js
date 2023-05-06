import React from 'react';
import userImg from '../../assets/Images/Mohan-muruge.jpg';

export default function UserImage (props) {
    return (
        <div className={props.display}>
            <img className="navbar__user-img" src={userImg} alt="mohan-muruge"/>
        </div>
    )
}