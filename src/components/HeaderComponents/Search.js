import React from 'react';
import searchIcon from '../../assets/Icons/search.svg';
import SearchSection from '../UIHeader/SearchSection';

export default function Search(props) {
    return (
        <SearchSection>
            <img className="navbar__search-icon" src={searchIcon} alt="search-icon"/>
            <input className="navbar__search-input" type="text" placeholder="Search"/>
        </SearchSection>
    )
}