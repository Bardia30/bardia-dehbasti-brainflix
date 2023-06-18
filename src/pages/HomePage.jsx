import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../components/MainComponents/VideoComponents/Video';
import MainBottomSection from '../components/MainComponents/MainBottomSection/MainBottomSection';
import { useParams } from 'react-router-dom';


function HomePage() {

    const [videoDetailsData, setVideoDetailsData] = useState() //state that holds the details for each selected video
    const [videosData, setVideosData] = useState() //state that holds the array of videos in next videos list
    
    const APIUrlVideos =  'https://project-2-api.herokuapp.com/videos';
    const api_key = '?api_key=f5296aef-42b9-41cb-a604-bf1e079f7f17'

    //a state that hold the id of the current id, to show on video player, the first one as default
    const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8"); //state that holds the id of the selected video
    
    const params = useParams();
    const { videoId } = params;

    //to get the videosData (for articles)
    useEffect(() => {
        axios.get(APIUrlVideos+api_key)
            .then((res) => {
                setVideosData(res.data);
                //checks if dynamic url parameter (video ID) exists, or when user has clicked on a video in next videos, then sets the currentVideoId state to the selected video 
                if (videoId) {
                    setCurrentVideoId(videoId);
                }
                //this checks if videoId is undefined, to set the currentVideoId to the default one, mainly was created for when user clicks on the logo, to bring to homepage with default video  
                if (videoId === undefined) {
                    setCurrentVideoId("84e96018-4022-434e-80bf-000ce4cd12b8")
                }
                return res.data;
            })
            //if another video has been clicked, do an axios call to get the detail video data 
            .then(()=> {
                axios.get(`${APIUrlVideos}/${currentVideoId}/${api_key}`)
                    .then(res => {
                        setVideoDetailsData(res.data);
                    })
                    .catch(err => console.log(err.message))
            })
            .catch(err => console.log(err.message))

            
    }, [videoId, currentVideoId])


    return (
        <main className='main'>
            {videoDetailsData && (
                <Video imageUrl={videoDetailsData.image} videoUrl = {`${videoDetailsData.video}${api_key}`}/>
            )}
            {videosData && videoDetailsData && (
                <MainBottomSection setVideoDetailsData={setVideoDetailsData} currentVideoId={currentVideoId} videosData={videosData} currentVideo={videoDetailsData}/>
            )}
            
        </main>
    )
}

export default HomePage