import React from 'react';
import '../../HeaderComponents/Header.scss';


function CallToAction({ clickHandler,type, classCta, classImg, icon, alt, classText, text }) {
  return (
    <button onClick={clickHandler} type={type} className={classCta}>
            <img className={classImg} src={icon} alt={alt}/>
            <p className={classText}>{text}</p>
    </button>
  )
}

export default CallToAction;