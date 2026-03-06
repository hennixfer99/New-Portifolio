import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Particle() {
    const [isDarkTheme, setIsDarkTheme] = useState(
        document.documentElement.getAttribute("data-theme") === "dark",
    );

    useEffect(() => {
        const root = document.documentElement;

        const observer = new MutationObserver(() => {
            setIsDarkTheme(root.getAttribute("data-theme") === "dark");
        });

        observer.observe(root, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        return container;
    }, []);

    const lineColor = isDarkTheme ? "#ffffff" : "#000000";

    const particlesOptions = useMemo(
        () => ({
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
                    value: lineColor,
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
                links: {
                    enable: true,
                    distance: 150,
                    color: lineColor,
                    opacity: 1,
                    width: 1,
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: lineColor,
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
            background: {
                color: isDarkTheme ? "#000000" : "#ffffff",
            },
            retina_detect: true,
        }),
        [isDarkTheme, lineColor],
    );

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
}

export default Particle;
