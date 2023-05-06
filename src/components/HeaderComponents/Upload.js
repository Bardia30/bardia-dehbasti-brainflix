import React from 'react';
import UploadSection from '../UIHeader/UploadSection';



export default function Upload(props){
    return (
        <UploadSection sectionClass={props.classUpload}>
            <img className={props.classImg} src={props.icon} alt={props.alt}/>
            <p className={props.classText}>{props.text}</p>
        </UploadSection>
    );
}
