import React from 'react';
import PublishSection from './PublishSection';
import '../../HeaderComponents/Header.scss';


function PublishButton(props) {
  return (
    <PublishSection sectionClass={props.classUpload}>
            <img className={props.classImg} src={props.icon} alt={props.alt}/>
            <p className={props.classText}>{props.text}</p>
    </PublishSection>
  )
}

export default PublishButton