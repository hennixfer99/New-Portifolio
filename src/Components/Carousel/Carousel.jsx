import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Carousel = ({images}) => {

    return (
        <Splide
            hasTrack={false}
            options={{
                type: "loop",
                start: 0,
                rewind: true,
                interval: 5000,
                autoPlay: true,
            }}
            onMounted={(splide) => {
                splide.Components.Autoplay.play();
            }}
        >
            <SplideTrack
                children={images.map((image) => (
                    <>
                        <img alt={image.description} src={image.img} />
                        <SplideSlide />
                    </>
                ))}
            />
        </Splide>
    );
};

export default Carousel;
