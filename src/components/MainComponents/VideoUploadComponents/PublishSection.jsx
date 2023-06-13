import React from 'react';
import '../../HeaderComponents/Header.scss';
import { useNavigate } from 'react-router-dom';

function PublishSection(props) {
    const navigate = useNavigate();
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        alert("Your Video has been uploaded!")
        navigate('/');
    }


  return (
    <button onClick={handleButtonClick} className={props.sectionClass}>
        {props.children}
    </button>
  )
}

export default PublishSection