import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
    const [particleColor, setParticleColor] = useState("#fff");

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });

        const handleScroll = () => {
            const shouldBeBlack = window.scrollY > 0;
            setParticleColor(shouldBeBlack ? "#000" : "#fff");
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                },
                modes: {
                    push: {
                        distance: 30,
                        duration: 15,
                    },
                    grab: {
                        distance: 200,
                    },
                },
            },
            particles: {
                color: {
                    value: particleColor,
                },
                links: {
                    color: particleColor,
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                    },
                    value: 90,
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        }),
        [particleColor]
    );

    return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
