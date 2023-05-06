import React from 'react';
import searchIcon from '../../assets/Icons/search.svg';
import SearchSection from '../UIHeader/SearchSection';


export default function Search(props) {
    return (
        <SearchSection classes={props.classSearch}>
            <img className={props.imgClass} src={props.icon} alt=""/>
            <input className={props.inputClass} type="text" placeholder={props.placeHolder}/>
        </SearchSection>
    )
}