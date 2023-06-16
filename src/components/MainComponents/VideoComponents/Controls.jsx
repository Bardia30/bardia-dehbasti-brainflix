import React from 'react';
import './Controls.scss';
import Play from './Play';
import ProgressBar from './ProgressBar';
import FullScreenSound from './FullScreenSound';


function Controls({ handlePlayButton }) {
  return (
    <div className='controls'>
        <Play handlePlayButton={handlePlayButton}/>
        <ProgressBar/>
        <FullScreenSound/>
    </div>
  )
}

export default Controls