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

    //a state that hold the id of the current id, to show on video player, the first one as default
    const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
    
    const params = useParams();
    const { videoId } = params;


    //to get the videosData (for articles)
    useEffect(() => {
        axios.get(APIUrlVideos+api_key)
            .then((res) => {
                setVideosData(res.data);
                if (videoId) {
                    setCurrentVideoId(videoId);
                }
                return res.data;
            })
            .then(videosData => {
                if (videosData && currentVideoId) {
                    return axios.get(`${APIUrlVideos}/${currentVideoId}/${api_key}`)
                }
            })
            .then(res => {
                if (res) {
                    //eslint-disable-next-line react-hooks/exhaustive-deps
                    setVideoDetailsData(res.data)
                }
            })
            .catch(err => console.log(err.message))

            
    }, [videoId, currentVideoId])

    
    return (
        <>
        <Header setCurrentVideoId={setCurrentVideoId}/>
        
        <main className='main'>
            {videoDetailsData && (
                <Video imageUrl={videoDetailsData.image} videoUrl = {`${videoDetailsData.video}${api_key}`}/>
            )}
            {videosData && videoDetailsData && (
                <MainBottomSection setVideoDetailsData={setVideoDetailsData} currentVideoId={currentVideoId} videosData={videosData} currentVideo={videoDetailsData}/>
            )}
            
        </main>
        </>
    )
}

export default HomePage