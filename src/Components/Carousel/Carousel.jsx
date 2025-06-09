import useEmblaCarousel from "embla-carousel-react";
import Container from "./Styled";

const Carousel = ({ images }) => {
    const [emblaRef] = useEmblaCarousel();
    return (
        <Container>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((images) => (
                        <div className="embla__slide">
                            <img src={images.img} alt={images.description}/>
                            <p>{images.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Carousel;
