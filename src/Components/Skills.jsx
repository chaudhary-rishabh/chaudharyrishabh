import React, { useState, useEffect } from 'react';
import styles from '../style/Skills.module.css'; // Import your CSS module
import "../style/common.css"
import AutoCarousel from './AutoCarousel';
import AutoCarousel2 from './AutoCarousel2';
import "../style/Skill.css"


import cs50 from "../images/cs50logo.png"
import coursera from "../images/courseralogo.png"
import udemy from "../images/udemylogo.png"
import simplilearn from "../images/simplilearnlogo.jpg"

const text = [
    {one: "CS50 Introduction to Computer Science"},
    {two: "Coursera UX|UI Design"},
    {three: "Udemy MERN Full Stack web development"},
    {four: "Simplilearn Javascript Basic to Advanced"},
];

const images = [cs50, coursera, udemy, simplilearn];
const Skills = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);



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
    const isVisible = scrollPosition > 3290;

    return (
        <div>
            <AutoCarousel />
            <div id="skills" className={`${styles.skillsContainer} ${isVisible ? styles.fallingAnimation : ''}`}>
                <div id="skills" className={`${styles.skillsContainer}`}>
                <h1 className='heading-common-txt'>Courses & Certifications</h1>
                <div className='courses-outer-box'>
                    <div className='courses-inner-left'>
                        <div className='black-card-courses'>
                            <h3 className='course-txt1'>{Object.values(text[currentIndex])[0]}</h3>
                        </div>
                    </div>
                    <div className='courses-inner-right'>
                        <img src={images[currentIndex]} className='course-img' alt={`course ${currentIndex + 1}`}/>
                    </div>
                </div>
            </div>
            </div>
            <AutoCarousel2 />
        </div>
    );
};

export default Skills;
