import React from 'react';
import UploadSectionLeft from '../components/MainComponents/VideoUploadComponents/UploadSectionLeft';
import UploadForm from '../components/MainComponents/VideoUploadComponents/UploadForm';
import '../components/MainComponents/VideoUploadComponents/VideoUpload.scss';



function UploadPage() {
  return (
      <section className='upload-page'>
          <h1 className='upload-page__title'>Upload Video</h1>
          <div className='upload-section'>
            <UploadSectionLeft />
            <UploadForm />
          </div>
      </section>
  )
}

export default UploadPage;