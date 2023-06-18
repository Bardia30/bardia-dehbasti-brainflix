import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import brainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import Nav from './Nav';
import RightSection from './RightSection';
import Search from './Search';
import Upload from './Upload';
import UserImage from './UserImage';
import uploadIcon from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';


function Header() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/')
    }
    
    return (
        <header>
            <Nav>
                <img onClick={handleLogoClick} className="navbar__logo" src={brainFlixLogo} alt="BrainFlix-logo"/>
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