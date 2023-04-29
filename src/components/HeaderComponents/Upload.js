import React from 'react';
import UploadSection from '../UIHeader/UploadSection';
import uploadIcon from '../../assets/Icons/upload.svg';


export default function Upload(){
    return (
        <UploadSection>
            <img className="navbar__upload-icon" src={uploadIcon} alt="search-icon"/>
            <p className="navbar__upload-text">upload</p>
        </UploadSection>
    );
}
