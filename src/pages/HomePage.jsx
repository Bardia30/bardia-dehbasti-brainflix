import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../components/MainComponents/VideoComponents/Video';
import MainBottomSection from '../components/MainComponents/MainBottomSection/MainBottomSection';
import Header from '../components/HeaderComponents/Header';
import { useParams } from 'react-router-dom';


function HomePage() {

    const [videoDetailsData, setVideoDetailsData] = useState()
    const [videosData, setVideosData] = useState() //ask if this is ok for 1st comment line
    
    const APIUrlVideos =  'https://project-2-api.herokuapp.com/videos';
    const api_key = '?api_key=f5296aef-42b9-41cb-a604-bf1e079f7f17'

//when clicked on homepage, the route is navigated back to


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

    return (
        <>
        <Header setCurrentVideoId={setCurrentVideoId}/>
        
        <main className='main'>
            {videoDetailsData && (
                <Video imageURL={videoDetailsData.image} />
            )}
            {videosData && videoDetailsData && (
                <MainBottomSection videosData={videosData} currentVideo={videoDetailsData}/>
            )}
            
        </main>
        </>
    )
}

export default HomePage