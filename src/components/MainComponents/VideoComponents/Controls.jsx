import React from 'react';
import Play from './Play';
import ProgressBar from './ProgressBar';
import FullScreenSound from './FullScreenSound';


function Controls() {
  return (
    <div className='controls'>
        <Play/>
        <ProgressBar/>
        <FullScreenSound/>
    </div>
  )
}

export default Controls