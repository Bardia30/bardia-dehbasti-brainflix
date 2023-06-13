import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import brainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import Nav from './Nav';
import RightSection from './RightSection';
import Search from './Search';
import Upload from './Upload';
import UserImage from './UserImage';
import uploadIcon from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';




function Header(props) {
    
    const handleLogoClick = () => {
        props.setCurrentVideoId("84e96018-4022-434e-80bf-000ce4cd12b8")
    }
    
    
    return (
        <header>
            <Nav>
                <Link onClick={handleLogoClick} className='navbar__logo-link' to='/'>
                    <img className="navbar__logo" src={brainFlixLogo} alt="BrainFlix-logo"/>
                </Link>
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
                    <Link className='navbar__upload-link' to='/upload'>
                        <Upload 
                            classUpload="cta" 
                            classImg="cta__icon" 
                            classText="cta__text" 
                            icon={uploadIcon} alt="search-icon" 
                            text="upload"
                        />
                    </Link>
                    <UserImage display="navbar__user-tabdesk"/>
                </RightSection>
            </Nav>
        </header>
    )
}


export default Header;