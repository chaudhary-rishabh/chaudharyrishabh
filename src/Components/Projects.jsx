import React, { useState, useEffect } from 'react';
import '../style/common.css';
import '../style/ProjectAnimation.css';
import yogiceprojectImage from '../images/yogiceproject.png';
import iflickproject from '../images/iflickproject.png';
import restaurantproject from '../images/restaurantproject.png';
import sportsalizeproject from '../images/sportsalizeproject.png'
import laundryproject from '../images/laundrychaudharyrishabh.png'
import imsproject from '../images/imsproject.png'

const Projects = () => {
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

    const [isHovered, setIsHovered] = useState(false);


    const [popupOpen, setPopupOpen] = useState(null);

    const openPopup = (popupId) => {
        setPopupOpen(popupId);
    };

    const closePopup = () => {
        setPopupOpen(null);
        setIsHovered(false);
    };

   
    const projectbox1 = "project-box1";
    const projectbox2 = "project-box2";
    const projectbox3 = "project-box3";
    const projectbox4 = "project-box4";
    const projectbox5 = "project-box5";
    const projectbox6 = "project-box6";

    return (
        <div id="projects" className={"project-main"} style={isHovered ? { background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))' } : {}}>
        <div className='project-background'>
            <h1 className='project-txt1' style={{ opacity: scrollPosition >= 450 && scrollPosition <= 3000 ? 1 : 0 }}>
            Projects
            </h1>
        </div>
            {popupOpen === 1 ?<div className= 'project-box-popup'>
                        <h2 className='project-box-txt'>Yogice E-commerce</h2>
                        <a href="https://yogice.in"><img src={yogiceprojectImage} className='project-img' alt="project1" /></a>
                        <a href="https://yogice.in"><p className='popup-list-item popup-txt-link'> yogice.in</p></a>
                        <ol className='popup-list'>
                            <li className='popup-list-item popup-txt'>&bull; Full Stack E-commerce responsive web application built using MERN Stack</li>
                            <li className='popup-list-item popup-txt'>&bull; Hosted on Server with domain</li>
                            <li className='popup-list-item popup-txt'>&bull; Managed data across application</li>
                            <li className='popup-list-item popup-txt'>&bull; Reactjs functional components with appealing UI with animation</li>
                            <li className='popup-list-item popup-txt'>&bull; Used MongoDB database for collections</li>
                            <li className='popup-list-item popup-txt'>&bull; Features: add to cart, order and payonline, searching, sorting</li>
                        </ol>
                        <button className='popup-btn' onClick={closePopup}>Close</button>
                    </div>
                    :
                    <div className={`${projectbox1} `} onClick={() => openPopup(1)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <h2 className='project-box-txt'>Yogice E-commerce</h2>
                        <img src={yogiceprojectImage} className='project-img' alt="project1"/>
                    </div>
            }
            
            {popupOpen === 2 ?<div className='project-box-popup' >
                        <h2 className='project-box-txt'>Laundry System</h2>
                        <a href="https://github.com/chaudhary-rishabh/laundry"><img src={laundryproject} className='project-img' alt="project2" /></a>
                            <a href="https://github.com/chaudhary-rishabh/laundry"><p className='popup-list-item popup-txt-link'> Github.com</p></a>
                        <ol className='popup-list'>
                            <li className='popup-list-item popup-txt'>&bull; Full Stack web application built using MERN Stack</li>
                            <li className='popup-list-item popup-txt'>&bull; Reactjs reusable components with react bootstrap and CSS</li>
                            <li className='popup-list-item popup-txt'>&bull; Expressjs REST API fetching data from MongoDB</li>
                            <li className='popup-list-item popup-txt'>&bull; Used MongoDB database for collections</li>
                            <li className='popup-list-item popup-txt'>&bull; 2 user roles: Admin and User with login/signup functionality</li>
                        </ol>
                        <button className='popup-btn' onClick={closePopup}>Close</button>
                    </div>
                        :
                    <div className={`${projectbox2}`} onClick={() => openPopup(2)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <h2 className='project-box-txt'>Laundry System</h2>
                        <img src={laundryproject} onClick={()=> openPopup(2)} className='project-img' alt="project2"/>
                    </div>
            }

            {popupOpen === 3 ?<div className='project-box-popup' >
                        <h2 className='project-box-txt'>Restaurant Management</h2>
                <a href="https://grillit.netlify.app/#/2"><img src={restaurantproject} className='project-img' alt="project3"/></a>
                        <a href="https://grillit.netlify.app/#/2"><p className='popup-list-item popup-txt-link'> scanner.com</p></a>
                        <ol className='popup-list'>
                            <li className='popup-list-item popup-txt'>&bull; Full Stack E-commerce responsive web application built using MERN Stack</li>
                            <li className='popup-list-item popup-txt'>&bull; Managed data across application</li>
                            <li className='popup-list-item popup-txt'>&bull; Reactjs functional components with appealing UI with animation</li>
                            <li className='popup-list-item popup-txt'>&bull; Used MongoDB database for collections</li>
                            <li className='popup-list-item popup-txt'>&bull; Expressjs rest API</li>
                            <li className='popup-list-item popup-txt'>&bull; Scan and order online food, realtime data management</li>
                        </ol>
                        <button className='popup-btn' onClick={closePopup}>Close</button>
                    </div>
                        :
                    <div className={`${projectbox3}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <h2 className='project-box-txt'>Restaurant Management</h2>
                        <img src={restaurantproject}  onClick={()=> openPopup(3)} className='project-img' alt="project3"/>{/*https://grillit.netlify.app/#/2*/}
                    </div>
            }

            {popupOpen === 4 ?<div className='project-box-popup' >
                    <h2 className='project-box-txt'>iFlick E-commerce</h2>
                    <a href="https://iflick.in"><img src={iflickproject} className='project-img' alt="project4"/></a>
                        <a href="https://iflick.in"><p className='popup-list-item popup-txt-link'> iflick.in</p></a>
                    <ol className='popup-list'>
                            <li className='popup-list-item popup-txt'>&bull; Reactjs E-commerce responsive web application</li>
                            <li className='popup-list-item popup-txt'>&bull; Using Reactjs Managed data across application</li>
                            <li className='popup-list-item popup-txt'>&bull; No API no backend build using only Reactjs library</li>
                        </ol>
                    <button className='popup-btn' onClick={closePopup}>Close</button>
                </div>
                :
                <div className={`${projectbox4}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h2 className='project-box-txt'>iFlick E-commerce</h2>
                    <img src={iflickproject} onClick={()=> openPopup(4)} className='project-img' alt="project4"/>
                </div>
            }

            {popupOpen === 5 ?<div className='project-box-popup' >
                    <h2 className='project-box-txt'>Sports Social Media</h2>
                    <a href="https://chaudhary-rishabh.github.io/find/"><img src={sportsalizeproject} className='project-img' alt="project5"/></a>
                        <a href="https://chaudhary-rishabh.github.io/find/"><p className='popup-list-item popup-txt-link'> website.com</p></a>
                    <ol className='popup-list'>
                            <li className='popup-list-item popup-txt'>&bull; Reactjs responsive web application</li>
                            <li className='popup-list-item popup-txt'>&bull; Used css animations and reactjs buildin functions</li>
                            <li className='popup-list-item popup-txt'>&bull; Features : add post, like post, commments, Chating, Scrolling</li>
                        </ol>
                    <button className='popup-btn' onClick={closePopup}>Close</button>
                </div>
                    :
                <div className={`${projectbox5}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h2 className='project-box-txt'>Sports Social Media</h2>
                    <img src={sportsalizeproject}  onClick={()=> openPopup(5)} className='project-img' alt="project5"/> 
                </div>
            }
            {popupOpen === 6 ?<div className='project-box-popup' >
                    <h2 className='project-box-txt'>Immigration System</h2>
                    <a href="https://github.com/chaudhary-rishabh/SoulGiannis.github.io/tree/main/First_web_login"><img src={imsproject} className='project-img' alt="project6"/></a>
                    <a href="https://github.com/chaudhary-rishabh/SoulGiannis.github.io/tree/main/First_web_login"><p className='popup-list-item  popup-txt-link'>Sourse Code</p></a>
                    <ol className='popup-list'>
                            <li className='popup-list-item popup-txt'>&bull; Full Stack Java, JSP, Servlet web application</li>
                            <li className='popup-list-item popup-txt'>&bull; Authentication and Authorization </li>
                            <li className='popup-list-item popup-txt'>&bull; Admin and User panel management</li>
                        </ol>
                    <button className='popup-btn' onClick={closePopup}>Close</button>
                </div>
                    :
                <div className={`${projectbox6}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h2 className='project-box-txt'>Immigration Management</h2>
                    <img src={imsproject}  onClick={()=> openPopup(6)} className='project-img' alt="project5"/>
                </div>
            }
        </div>  
    )
}

export default Projects