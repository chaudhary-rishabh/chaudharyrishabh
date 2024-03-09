import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
    FaDocker, 
    FaLeaf, 
    FaCode, 
    FaDatabase,
    FaServer,
    FaLaptopCode,
    FaTerminal,
    FaLinux,
    FaCodeBranch,
    FaUbuntu
} from 'react-icons/fa';
import "../style/common.css";

const AutoCarousel2 = () => {
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
                <FaDocker style={{ color: "#0DB7ED" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaLeaf style={{ color: "#14570e" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaCode style={{ color: "#4A154B" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaServer style={{ color: "#4D4D4D" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaDatabase style={{ color: "#336791" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaLaptopCode style={{ color: "#333333" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaTerminal style={{ color: "#000000" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaCodeBranch style={{ color: "#FFA500" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaLinux style={{ color: "#000000" }} className='icons-programming-slick' />
            </div>
            <div>
                <FaUbuntu style={{ color: "#E34F26" }} className='icons-programming-slick' />
            </div>
        </Slider>
    );
};

export default AutoCarousel2;
