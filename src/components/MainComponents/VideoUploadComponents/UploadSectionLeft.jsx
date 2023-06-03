import React from 'react';
import uploadImg from '../../../assets/Images/Upload-video-preview.jpg';

function UploadSectionLeft() {
  return (
    <section className='upload-section__left'>
        <h3 className='upload-section__title'>video thumbnail</h3>
        <img className='upload-section__thumbnail' src={uploadImg} alt="bicycle-thumbnail" />
    </section>
  )
}

export default UploadSectionLeft