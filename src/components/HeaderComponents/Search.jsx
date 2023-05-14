import React from 'react';
import SearchSection from '../UIHeader/SearchSection';


export default function Search(props) {
    return (
        <SearchSection classes={props.classSearch}>
            <img className={props.imgClass} src={props.icon} alt=""/>
            <input className={props.inputClass} type="text" placeholder={props.placeHolder}/>
        </SearchSection>
    )
}