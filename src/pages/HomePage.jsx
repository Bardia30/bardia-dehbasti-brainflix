import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../components/MainComponents/VideoComponents/Video';
import MainBottomSection from '../components/MainComponents/MainBottomSection/MainBottomSection';
// import detailVideosData from '../data/video-details.json';
// import videosDataJson from '../data/videos.json';

function HomePage() {

    const [videoDetailsData, setVideoDetailsData] = useState()
    const [videosData, setVideosData] = useState() //ask if this is ok for 1st comment line
    
    const APIUrlVideos =  'https://project-2-api.herokuapp.com/videos';
    const api_key = '?api_key=f5296aef-42b9-41cb-a604-bf1e079f7f17'

    useEffect(() => {
        axios.get(APIUrlVideos+api_key)
            .then((res) => {
                setVideosData(res.data);
            })
            .catch(err => console.log(err.message))
    }, [])



    useEffect(() => {
        if (videosData) {
            axios.get(`${APIUrlVideos}/${videosData[0].id}/${api_key}`)
            .then(res => {
                setVideoDetailsData(res.data)
            })
            .catch(err => console.log(err.message))
        }
    }, [videosData])

    
    
    
    return (
        <main className='main'>
            {videosData && (
                <Video imageURL={videosData[0].image} />
            )}
            {videosData && videoDetailsData && (
                <MainBottomSection videosData={videosData} currentVideo={videoDetailsData} />
            )}
            
        </main>
    )
}

export default HomePage