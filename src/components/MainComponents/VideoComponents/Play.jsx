import React from 'react';
import playIcon from '../../../assets/Icons/play.svg';
import './Play.scss';


function Play() {
  return (
    <div className='play'>
      <img className='play__icon' src={playIcon} alt="play-icon" />
    </div>
  )
}

export default Play