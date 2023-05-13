import React from 'react';
import fullScreen from '../../../assets/Icons/fullscreen.svg';
import volume from '../../../assets/Icons/volume_up.svg';

function FullScreenSound() {
  return (
    <div className='screen-sound'>
        <img className="screen-sound__icon" src={fullScreen} alt="" />
        <img className="screen-sound__icon" src={volume} alt="" />
    </div>
  )
}

export default FullScreenSound