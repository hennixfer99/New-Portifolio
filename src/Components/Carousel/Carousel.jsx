import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Container from "./Styled";

const Carousel = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <Container>
            <button
                className="embla__nav embla__nav--prev"
                onClick={scrollPrev}
                aria-label="Slide anterior"
                type="button"
            >
                <span className="embla__arrow embla__arrow--left" />
            </button>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div
                            className="embla__slide"
                            key={`${image.description}-${index}`}
                        >
                            <img src={image.img} alt={image.description} />
                            <p>{image.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="embla__nav embla__nav--next"
                onClick={scrollNext}
                aria-label="Próximo slide"
                type="button"
            >
                <span className="embla__arrow embla__arrow--right" />
            </button>
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
                        onClick={() => emblaApi?.scrollTo(index)}
                        type="button"
                        aria-label={`Ir para o slide ${index + 1}`}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Carousel;
