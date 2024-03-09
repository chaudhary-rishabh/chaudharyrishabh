import React, { useState,useEffect } from 'react';
import '../style/common.css';
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';
import rishabhProfile from "../images/profile_rishabh.jpg"
import hello from "../images/hello.gif"
import AutoCarousel from './AutoCarousel';

const Landing = () => {
    const [dropdown, setDropdown] = useState(null);

    const handleDropdownClick = (option) => {
        if (dropdown === option) {
        setDropdown(null);
        } else {
        setDropdown(option);
        }
    };
    
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
    const isVisible = scrollPosition >= 200;

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='main-background-landing'>
            <div className='daj'>
            <div className='dajf'>
            <div className="div-main">
            <div className="code-container">
                <div className="code-container-sub1">
                <img src={rishabhProfile} className="profile-pic" alt="rishabhprofile"/>
                
                    <p
                    className="code-txt2"
                    onClick={() => handleDropdownClick('hireMe')}
                    >
                    &gt;hire me
                    </p>
                    {dropdown === 'hireMe' && (
                    <div className="dropdown">
                        {/* Options for hire me dropdown */}
                        <p className="code-txt2">fullstack</p>
                        <p className="code-txt2">software</p>
                        <p className="code-txt2">frontend</p>
                        <p className="code-txt2">backend</p>
                    </div>
                    )}
                    <p
                    className="code-txt2"
                    onClick={() => handleDropdownClick('developWebsite')}
                    >
                    &gt;Develop
                    </p>
                    {dropdown === 'developWebsite' && (
                    <div className="dropdown">
                        {/* Options for develop website dropdown */}
                        <p className="code-txt2">Mern stack</p>
                        <p className="code-txt2">Javascript</p>
                        <p className="code-txt2">Reactjs</p>
                        <p className="code-txt2">Desktop app</p>
                    </div>
                    )}
                    <p
                    className="code-txt2"
                    onClick={() => handleDropdownClick('Project')}
                    >
                    &gt;Project
                    </p>
                    {dropdown === 'Project' && (
                    <div className="dropdown">
                        {/* Options for develop website dropdown */}
                        <p className="code-txt2">fullstack</p>
                        <p className="code-txt2">software</p>
                        <p className="code-txt2">frontend</p>
                        <p className="code-txt2">backend</p>
                    </div>
                    )}
                    
                    <p
                    className="code-txt2"
                    onClick={() => handleDropdownClick('havedoubt')}
                    >
                    &gt;query!
                    </p>
                    {dropdown === 'havedoubt' && (
                    <div className="dropdown">
                        {/* Options for develop website dropdown */}
                        <p className="code-txt2">java</p>
                        <p className="code-txt2">mern stack</p>
                        <p className="code-txt2">DSA</p>
                        <p className="code-txt2">SEO</p>
                        <p className="code-txt2">Hosting</p>
                    </div>
                    )}
                </div>
                <div className="code-container-sub2">
                    <div className="code-container-sub2-1">
                        <h1 className="code-txt1"><span style={{color:"white"}}>01 </span> &lt; &#128075;  &gt;</h1>
                        <h1 className="code-txt1"><span style={{color:"white"}}>02 </span>  &lt; Hi I&rsquo;m Rishabh /&gt;</h1>
                        <h1 className="code-txt1"><span style={{color:"white"}}>03 </span>  &lt; Full stack Web Developer /&gt;</h1>
                        <h1 className="code-txt1"><span style={{color:"white"}}>04 </span>  &lt; Expert in JavaScript, MERN /&gt;</h1>
                        <h1 className="code-txt1"><span style={{color:"white"}}>05 </span>  &lt; /<img src={hello} className="hello-gif" alt="hello"/> &gt;</h1>
                    </div>
                    <div>
                        <p className='code-txt3'>
                            Skills:\Reactjs\Django\Javascript\CSS&gt; ^C
                        </p>
                        <p className='code-txt3'>
                            Skills:\Redux\HTML\JavaScript\Git\SQL&gt; ^C
                        </p>
                        <p className='code-txt3'>
                            Skills:\Mongodb\Expressjs\Java\Nodejs&gt;
                        </p>
                    </div>  
                </div>
                </div>
            </div>
                <div className="routes-container">
                    <Link className="link-routes" to="projects" smooth={true} duration={500}>
                        <button className="btn-routes">Projects</button>
                    </Link>
                    <Link className="link-routes" to="experience" smooth={true} duration={1000}>
                        <button className="btn-routes">Experience</button>
                    </Link>
                    <Link className="link-routes" to="skills" smooth={true} duration={1000}>
                        <button className="btn-routes">Courses</button>
                    </Link>
                    <Link className="link-routes" to="connect" smooth={true} duration={1000}>
                        <button className="btn-routes">Connect</button>
                    </Link>
                </div>
                <div className='daj-2'>
                    { isVisible && <button onClick={backToTop} className='scroll-btn'><FaArrowUp /></button> }
                </div>
            </div>
            </div>
            <AutoCarousel/>
            </div>
    );
};

export default Landing;
