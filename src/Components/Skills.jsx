import React, { useState, useEffect } from 'react';
import styles from '../style/Skills.module.css'; // Import your CSS module
import "../style/common.css"
import AutoCarousel from './AutoCarousel';
import AutoCarousel2 from './AutoCarousel2';

import cs50 from "../images/cs50logo.png"
import coursera from "../images/courseralogo.png"
import udemy from "../images/udemylogo.png"
import simplilearn from "../images/simplilearnlogo.jpg"

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const skills = [
        { image: cs50, link: "https://www.edx.org/?msclkid=f89255173a0b10f8458830c19e507f3b&utm_source=bing&utm_medium=cpc&utm_campaign=YBN%7CEDX%7CGeneral%7CPortfolio%7CSEM%7CBRD%7CINDIA&utm_term=edx.org&utm_content=YBN%7CEDX%7CGeneral%7CPortfolio%7CSEM%7CBRD%7CINDIA%7CCore" }, // Add links to your courses here
        { image: coursera, link: "https://www.coursera.org/account/accomplishments/certificate/URZSWCK9426M" },
        { image: udemy, link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-54808747-c6e4-4206-9e6c-3f534640af8e.pdf" },
        { image: simplilearn, link: "https://www.simplilearn.com/?utm_source=bing&utm_medium=cpc&utm_term=simplilearn&utm_content=392503905-1320514564874663-&utm_device=c&utm_campaign=B-Search-Brand-Exact-IN-AllDevice-adgroup-Brand-Simplilearn&msclkid=5625cd25f7301bc4f842a8f353bd67b4" },
        { image: cs50, link: "https://www.edx.org/?msclkid=f89255173a0b10f8458830c19e507f3b&utm_source=bing&utm_medium=cpc&utm_campaign=YBN%7CEDX%7CGeneral%7CPortfolio%7CSEM%7CBRD%7CINDIA&utm_term=edx.org&utm_content=YBN%7CEDX%7CGeneral%7CPortfolio%7CSEM%7CBRD%7CINDIA%7CCore" },
        { image: udemy, link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fc731b60-9b2f-4c1d-97e2-33f10bb4ad70.pdf" }
    ]; // Add more skills as needed

    useEffect(() => {
        // Automatically slide every 3 seconds
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (skills.length - 2)); // Display only 3 skills at a time
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount

    }, [currentIndex, skills.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (skills.length - 2)) % (skills.length - 2)); // Display only 3 skills at a time
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (skills.length - 2)); // Display only 3 skills at a time
    };

    // scroll
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    const isVisible = scrollPosition > 2200;
    return (
        <div>
            <AutoCarousel />
            <div id="skills" className={`${styles.skillsContainer} ${isVisible ? styles.fallingAnimation : ''}`}>
                <h1 className='heading-common-txt'>Courses & Certifications</h1>
                <div className={styles.slider}>
                    {skills.slice(currentIndex, currentIndex + 2).map((skill, index) => (
                        <div key={index} className={`${styles.skill} skills-box`}>
                            <a href={skill.link}><img src={skill.image} alt='course' className='img-skill' /></a>
                        </div>
                    ))}
                </div>
                <div className={styles.sliderDiv}>
                    <button className='sliderBtn' onMouseEnter={handlePrev}>&lt;</button>
                    <button className='sliderBtn' onClick={handleNext}>&gt;</button>
                </div>
            </div>
            <AutoCarousel2 />
        </div>
    );
};

export default Skills;
