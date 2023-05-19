import React from 'react';
import './Header.scss';
import brainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import Nav from '../UIHeader/Nav';
import RightSection from '../UIHeader/RightSection';
import Search from './Search';
import Upload from './Upload';
import UserImage from './UserImage';
import uploadIcon from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';




function Header() {
    return (
        <header>
            <Nav>
                <img className="navbar__logo" src={brainFlixLogo} alt="BrainFlix-logo"/>
                <RightSection>
                <div className='navbar__search-user'>
                    <Search
                        classSearch="navbar__search-section"
                        imgClass="navbar__upload-icon"
                        inputClass="navbar__search-input"
                        icon={searchIcon}
                        placeHolder="Search"
                    />
                    <UserImage display="navbar__user-mobile"/>
                </div>
                    <Upload classUpload="navbar__upload-section" classImg="navbar__upload-icon" classText="navbar__upload-text" icon={uploadIcon} alt="search-icon" text="upload"/>
                    <UserImage display="navbar__user-tabdesk"/>
                </RightSection>
            </Nav>
        </header>
    )
}


export default Header;