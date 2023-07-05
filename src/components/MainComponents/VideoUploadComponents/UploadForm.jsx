import React, { useState } from 'react';
import publishIcon from '../../../assets/Icons/publish.svg';
import CallToAction from './CallToAction';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function UploadForm() {
  const navigate = useNavigate();
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  }
  
  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  }


  const handleUploadFormSubmit = (e) => {
    e.preventDefault();

    const userTitle = e.target.videoTitle.value;
    const userDescription = e.target.videoDescription.value;
    setDescriptionValue('');
    setTitleValue('');

    //TODO: Fix the object's keys 
    const newObj = {
      videoTitle: userTitle,
      videoDescription: userDescription
    }

    //TODO: write axios post request to the backend API
    
    
    
    alert(`Your Video titled "${userTitle}" has been uploaded!`); 
    navigate('/');
  }

  const cancelClickHandler = (e) => {
    e.preventDefault();
    alert("Your video upload process has been cancelled")
    navigate('/');
  }

  return (
    <form onSubmit={handleUploadFormSubmit} className='upload-form'>
        <div className='upload-form__labels-and-inputs'>
            <label className='upload-form__label' htmlFor="videoTitle">title your video</label>
            <input onChange={handleTitleChange} value={titleValue} className='upload-form__input' name='videoTitle' type="text" placeholder='Add a title to your video'/>
            <label className='upload-form__label upload-form__label--high-pad' htmlFor="videoDescription">Add a video description</label>
            <textarea onChange={handleDescriptionChange} value={descriptionValue} className='upload-form__input upload-form__input--description' type="text" name="videoDescription" placeholder='Add a description to your video'/>
        </div>
            
        <div className='buttons-section'>
            <CallToAction 
              type='button'
              clickHandler={cancelClickHandler}
              classCta='buttons-section__cancel-cta'
              text='cancel'
            />  
            <CallToAction
              type='submit'
              classCta="buttons-section__publish-cta" 
              classImg="buttons-section__publish-icon" 
              classText="buttons-section__publish-text"
              icon={publishIcon} 
              alt="publish-icon" 
              text="publish"
            />
        </div>
        </form>
  )
}

export default UploadForm