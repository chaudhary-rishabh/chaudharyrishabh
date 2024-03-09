import React from 'react';
import "../style/common.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Use faExternalLinkAlt

const Header = () => {
    return (
        <div className='header'>
            <a href="https://github.com/chaudhary-rishabh"><FontAwesomeIcon className='header-icon' style={{ color: "#fff" }} icon={faGithub} /></a>
            <a href="https://drive.google.com/file/d/1JI7l2EjiceY4lrUwEU21cCdiGMqCPQpU/view?usp=drive_link"><FontAwesomeIcon className='header-icon' style={{ color: "#375168" }} icon={faFilePdf} /></a>
            <a href="mailto:me@chaudharyrishabh.com"><FontAwesomeIcon className='header-icon' style={{ color: "#fff" }} icon={faEnvelope} /></a>
            <a href="https://www.linkedin.com/in/rishabh029/"><FontAwesomeIcon className='header-icon' style={{ color: "#0077B5" }} icon={faLinkedin} /></a>
            <a href="https://linktr.ee/rishabh_chaudhary"><FontAwesomeIcon className='header-icon' style={{ color: "#7289DA" }} icon={faExternalLinkAlt} /></a> {/* Use faExternalLinkAlt */}
        </div>
    );
};

export default Header;
