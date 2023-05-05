import React from 'react';
import brainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import '../../styles/partials/_header.scss';
import Nav from '../UIHeader/Nav';
import RightSection from '../UIHeader/RightSection';
import Search from './Search';
import Upload from './Upload';
import UserImage from './UserImage';


function Header() {
    return (
        <header>
            <Nav>
                <img className="navbar__logo" src={brainFlixLogo} alt="BrainFlix-logo"/>
                <RightSection>
                    <Search/>
                    <Upload/>
                    <UserImage/>
                </RightSection>
            </Nav>
        </header>
    )
}


export default Header;