import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../components/MainComponents/VideoComponents/Video';
import MainBottomSection from '../components/MainComponents/MainBottomSection/MainBottomSection';
import Header from '../components/HeaderComponents/Header';
import { useParams } from 'react-router-dom';


function HomePage() {

    const [videoDetailsData, setVideoDetailsData] = useState()
    const [videosData, setVideosData] = useState() 
    
    const APIUrlVideos =  'https://project-2-api.herokuapp.com/videos';
    const api_key = '?api_key=f5296aef-42b9-41cb-a604-bf1e079f7f17'


    const [newCommentPosted, setNewCommentPosted] = useState(false);    

    useEffect(() => {
        axios.get(APIUrlVideos+api_key)
            .then((res) => {
                setVideosData(res.data);
            })
            .catch(err => console.log(err.message))
    }, [])

    const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
    
    const params = useParams();
    const { videoId } = params;

    useEffect(() => {
        if (videoId){
            setCurrentVideoId(videoId);
        }
    }, [videoId, videosData, videoDetailsData])

    useEffect(() => {
        if (videosData && currentVideoId) {
            axios.get(`${APIUrlVideos}/${currentVideoId}/${api_key}`)
            .then(res => {
                setVideoDetailsData(res.data)
            })
            .catch(err => console.log(err.message))
        }
    }, [videosData, currentVideoId])

    const postComment = (newComment) => {
        axios.post(`${APIUrlVideos}/${currentVideoId}/comments/${api_key}`, newComment)
            .then(res => {
                console.log(res.data)
                setNewCommentPosted(true);
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        if (newCommentPosted) {
            axios.get(`${APIUrlVideos}/${currentVideoId}/${api_key}`)
            .then(res => {
                setVideoDetailsData(res.data)
            })
            .catch(err => console.log(err.message))
        }
    }, [newCommentPosted, currentVideoId, videoDetailsData])

    return (
        <>
        <Header setCurrentVideoId={setCurrentVideoId}/>
        
        <main className='main'>
            {videoDetailsData && (
                <Video imageURL={videoDetailsData.image} />
            )}
            {videosData && videoDetailsData && (
                <MainBottomSection postComment={postComment} videosData={videosData} currentVideo={videoDetailsData}/>
            )}
            
        </main>
        </>
    )
}

export default HomePage