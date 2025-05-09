import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "none",
                    },
                    opacity: {
                        value: 1,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 0,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 1,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                // interactivity: {
                //     events: {
                //         onHover: {
                //             enable: true,
                //             mode: "bubble",
                //             parallax: {
                //                 enable: false,
                //                 force: 60,
                //                 smooth: 10,
                //             },
                //         },
                //         resize: true,
                //     },
                //     // modes: {
                //     //     grab: {
                //     //         distance: 400,
                //     //         lineLinked: {
                //     //             opacity: 1,
                //     //         },
                //     //     },
                //     //     bubble: {
                //     //         distance: 400,
                //     //         size: 100,
                //     //         duration: 2,
                //     //         opacity: 1,
                //     //         speed: 3,
                //     //     },
                //     //     repulse: {
                //     //         distance: 200,
                //     //     },
                //     //     push: {
                //     //         particles_nb: 4,
                //     //     },
                //     //     remove: {
                //     //         particles_nb: 2,
                //     //     },
                //     // },
                // },
                backgroundMask: {
                    enable: true,
                    cover: {
                        value: "#ffffff",
                    },
                },
                retina_detect: true,
                // background: {
                //     color: "#ffffff",
                //     image: "url('https://particles.js.org/images/background3.jpg')",
                //     position: "50% 50%",
                //     repeat: "no-repeat",
                //     size: "cover",
                // },
            }}
        />
    );
}

export default Particle;
