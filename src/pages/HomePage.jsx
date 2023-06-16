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


    //to get the videosData (for articles)
    useEffect(() => {
        axios.get(APIUrlVideos+api_key)
            .then((res) => {
                setVideosData(res.data);
            })
            .catch(err => console.log(err.message))
    }, [])

    //a state that hold the id of the current id, to show on video player, the first one as default
    const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
    
    const params = useParams();
    const { videoId } = params;


    //checks to see if dynamic url videoId exist, then changes currentVideoId to the id on the dynamic url route
    useEffect(() => {
        if (videoId){
            setCurrentVideoId(videoId);
        }
    }, [videoId, videosData, videoDetailsData])

    //checks if videosData and currentVideoId exist, and then makes a request to videos/:videoId api to get video details data, and sets state
    useEffect(() => {
        if (videosData && currentVideoId) {
            axios.get(`${APIUrlVideos}/${currentVideoId}/${api_key}`)
            .then(res => {
                setVideoDetailsData(res.data)
            })
            .catch(err => console.log(err.message))
        }
    }, [videosData, currentVideoId])



    //function that posts new comment 
    const postComment = (newComment) => {
        axios.post(`${APIUrlVideos}/${currentVideoId}/comments/${api_key}`, newComment)
            .then(res => {
                console.log(res.data)
                setNewCommentPosted(true);
            })
            .catch(err => console.log(err.message))
    }

    //checks if there is a new comments posted then, requests another axios request for rendering the details video
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