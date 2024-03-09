// components/EducationExperience.js
import React from 'react';
import styles from '../style/EducationExperience.module.css';
import "../style/common.css";
import "../style/experience.css"

// images
import graduation from "../images/graduation_portfolio1.png"
// import job from "../images/job_portfolio2.png"
import job from "../images/job_experience4.png"
import internship from "../images/internship_experience1.png"

const EducationExperience = () => {
  return (
    <div id="experience" className="expreience-main">
      <h1 className='heading-common-txt'>Education & Experience</h1>
      <div className='expreience-sub'>
        <div className={styles.content}>
          <div>
            <ul>
              <p><li className={styles.txt}>Learned full basics to advanced programming</li></p>
              <p><li className={styles.txt}>Logic building, Problem solving, and all</li></p>
              <p><li className={styles.txt}>Developed and deployed several projects with great team</li></p>
              <p><li className={styles.txt}>Full Stack web development from basic to advanced</li></p>
            </ul>
          </div>
        </div>
        <DottedLine3/>
        <div>
          <img src={graduation} className='img-experience' width="310" height="270" alt='graduation'/>
        </div>
      </div>
      <div className='expreience-sub'>
        <div>
          <img src={job} className='img-experience' width="300" height="260"  alt='job'/>
        </div>
        <DottedLine2 />
        <div>
          <ul>
            <p><li className={styles.txt}>MERN Full Stack Developer</li></p>
            <p><li className={styles.txt}>Worked on live project on Reactjs, Redux</li></p>
            <p><li className={styles.txt}>Created API Using Expressjs, Nodejs</li></p>
            <p><li className={styles.txt}>Backend: Expressjs APIs,Git & Bitbucket.</li></p>
            <p><li className={styles.txt}>Ecommerce website:- UI|Backend|Database</li></p>
            <p><li className={styles.txt}>Maintained complex database architecture</li></p>
          </ul>
        </div>
      </div>
      <div className='expreience-sub'>
        <div>
          <ul>
            <p><li className={styles.txt}>Worked on professional skills</li></p>
            <p><li className={styles.txt}>Build and maintained projects in team</li></p>
            <p><li className={styles.txt}>Developed github, git, team skills</li></p>
            <p><li className={styles.txt}>Made a project in React.js and MERN Stack</li></p>
          </ul>
        </div>
        <DottedLine/>
        <div>
          <img src={internship} className='img-experience' width="300" height="290"  alt='internship'/>
        </div>
      </div>
    </div>
  );
};

const DottedLine = () => {
  return (
    <div className="dotted-line-container">
      <p className="dottedline-txt-header">N10Technosoft Internship</p>
      <p className="dottedline-txt">December 2022</p>
        <div className="dotted-line">
          {[...Array(6)].map((_, index) => (
            <div key={index} className={`dot ${index === 6 ? 'number' : ''}`}>
              *{index === 6 ? Math.floor(index / 6) + 1 : ''}
            </div>
          ))}
        </div>
          <p className="dottedline-txt">April 2023</p>
    </div>
  );
};

const DottedLine2 = () => {
  return (
    <div className="dotted-line-container">
      <p className="dottedline-txt-header">Full Stack Developer</p>
      <p className="dottedline-txt-header">Appance Technologies</p>
      <p className="dottedline-txt2">May 2023</p>
        <div className="dotted-line">
          {[...Array(6)].map((_, index) => (
            <div key={index} className={`dot ${index === 6 ? 'number' : ''}`}>
              *{index === 6 ? Math.floor(index / 6) + 1 : ''}
            </div>
          ))}
        </div>
      <p className="dottedline-txt2">Present</p>
    </div>
  );
};

const DottedLine3 = () => {
  return (
    <div className="dotted-line-container">
      <p className="dottedline-txt-header">Graduation MSU</p>
      <p className="dottedline-txt3">August 2020</p>
        <div className="dotted-line">
          {[...Array(6)].map((_, index) => (
            <div key={index} className={`dot ${index === 6 ? 'number' : ''}`}>
              *{index === 6 ? Math.floor(index / 6) + 1 : ''}
            </div>
          ))}
        </div>
      <p className="dottedline-txt3">April 2023</p>
    </div>
  );
};

export default EducationExperience;