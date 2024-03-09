import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
    FaReact, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaNodeJs, 
    FaGit, 
    FaNpm, 
    FaPython, 
    FaJava, 
    FaBootstrap, 
    FaAws, 
} from 'react-icons/fa';
import "../style/common.css";

const AutoCarousel = () => {
    // Customize settings as per your requirements
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Adjust the speed of the automatic transition
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div>
                <FaReact style={{ color: "#61DAFB" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaHtml5 style={{ color: "#E34F26" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaCss3Alt style={{ color: "#1572B6" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaJs style={{ color: "#F7DF1E" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaNodeJs style={{ color: "#68A063" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaGit style={{ color: "#F05032" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaNpm style={{ color: "#CB3837" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaPython style={{ color: "#3572A5" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaJava style={{ color: "#007396" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaBootstrap style={{ color: "#7952B3" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaAws style={{ color: "#FF9900" }} className='icons-programming-slick' />
            </div>
        </Slider>
    );
};

export default AutoCarousel;
