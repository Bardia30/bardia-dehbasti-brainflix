import React from 'react';
import './ProgressBar.scss';

function ProgressBar() {
  return (
    <div className='progress'>
        <div className='progress__timed-marker'></div>
        <p className='progress__time-left'>0:00 / 4:01</p>
    </div>
  )
}

export default ProgressBar