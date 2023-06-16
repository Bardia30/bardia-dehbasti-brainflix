import React from 'react';
import playIcon from '../../../assets/Icons/play.svg';
import './Play.scss';


function Play({handlePlayButton}) {
  return (
    <div onClick={handlePlayButton} className='play'>
      <img className='play__icon' src={playIcon} alt="play-icon" />
    </div>
  )
}

export default Play