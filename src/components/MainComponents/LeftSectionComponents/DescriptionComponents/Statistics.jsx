import React, { useEffect, useState } from 'react';
import './Description.scss';
import StatisticsSub from './StatisticsSub';
import viewIcon from '../../../../assets/Icons/views.svg';
import likesIcon from '../../../../assets/Icons/likes.svg';
import axios from 'axios';



export default function Statistics({ currentVideo, setVideoDetailsData }) {
    
    const [isLikesChanged, setIsLikesChanged] = useState(false);

    const onLikeClick = () => {
        axios.put(`http://localhost:5050/videos/${currentVideo.id}/likes`)
            .then(res => {
                console.log(res.data);
                setIsLikesChanged(true);
            })
            .catch(err => console.log(err.message));
    }

    useEffect(()=>{
        if (isLikesChanged) {
            axios.get(`http://localhost:5050/videos/${currentVideo.id}`)
                .then(res => {
                    setVideoDetailsData(res.data);
                })
                .catch(err => console.log(err.message))

        }
    },[currentVideo.id, isLikesChanged])
    
    return (
        <section className='description__statistics'>
            <StatisticsSub
                className="description__statistics--left"
                icon={viewIcon}
                count={currentVideo.views}
                description="views-icon"
            />
            <StatisticsSub
                onLikeClick={onLikeClick}
                className="description__statistics--right"
                icon={likesIcon}
                count={currentVideo.likes}
                description="likes-icon"
            />
        </section>
    )
}