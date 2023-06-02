import React from 'react';
import Upload from '../components/HeaderComponents/Upload';
import publishIcon from '../assets/Icons/publish.svg';

function UploadPage() {
  return (
    <section className='upload-page'>
        <h1 className='upload-page__title'>Upload Video</h1>
        <div className='upload-section'>
          <section className='upload-section__left'>
            <h3 className='upload-section__title'>video thumbnail</h3>
            <img src="" alt="" />
          </section>
          <form className='upload-form'>
            <label className='upload-form__label' htmlFor="videoTitle">title your video</label>
            <input name='videoTitle' type="text" placeholder='Add a title to your video'/>
            <label className='upload-form__label' htmlFor="videoDescription">Add a video description</label>
            <input type="text" name="videoDescription" placeholder='Add a description to your video'/>
          </form>
        </div>
        <div className='buttons-section'>
          <button className='buttons-section__cancel-cta'>cancel</button>
          <Upload
            classUpload="navbar__upload-section" 
            classImg="navbar__upload-icon" 
            classText="navbar__upload-text"
            icon={publishIcon} 
            alt="publish-icon" 
            text="publish"
          />
        </div>
    </section>
  )
}

export default UploadPage;