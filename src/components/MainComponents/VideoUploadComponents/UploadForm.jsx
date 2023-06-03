import React from 'react';
import Upload from '../../HeaderComponents/Upload';
import publishIcon from '../../../assets/Icons/publish.svg';

function UploadForm() {
  return (
    <form className='upload-form'>
        <div className='upload-form__labels-and-inputs'>
            <label className='upload-form__label' htmlFor="videoTitle">title your video</label>
            <input className='upload-form__input' name='videoTitle' type="text" placeholder='Add a title to your video'/>
            <label className='upload-form__label upload-form__label--high-pad' htmlFor="videoDescription">Add a video description</label>
            <textarea className='upload-form__input upload-form__input--description' type="text" name="videoDescription" placeholder='Add a description to your video'/>
        </div>
            
        <div className='buttons-section'>
            <button className='buttons-section__cancel-cta'>cancel</button>
            <Upload
            classUpload="navbar__upload-section publish-button" 
            classImg="navbar__upload-icon" 
            classText="navbar__upload-text"
            icon={publishIcon} 
            alt="publish-icon" 
            text="publish"
            />
        </div>
        </form>
  )
}

export default UploadForm