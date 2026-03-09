import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .embla {
        overflow: hidden;
        border: 1px solid var(--black);
        align-items: center;
        border-radius: 8px;
        width: 80vw;
        height: 80vh;
    }
    .embla__container {
        display: flex;
        height: 80vh;
    }
    .embla__slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10%;
        flex: 0 0 100%;
        min-width: 0;
    }
    img {
        max-width: 50%;
    }
    p {
        text-align: center;
        margin: 2% 35% 0 35%;
        font-size: 1.1rem;
    }

    .embla__nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 42px;
        height: 42px;
        border-radius: 999px;
        border: 1px solid var(--scrollbar-border);
        background: var(--scrollbar-thumb);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 15;
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            filter 0.2s ease;
    }

    .embla__nav:hover {
        transform: translateY(-50%) scale(1.05);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        filter: brightness(1.04);
    }

    .embla__nav--prev {
        left: 1.2rem;
    }

    .embla__nav--next {
        right: 1.2rem;
    }

    .embla__arrow {
        width: 10px;
        height: 10px;
        border-right: 2px solid var(--black);
        border-bottom: 2px solid var(--black);
        display: block;
    }

    .embla__arrow--left {
        transform: rotate(135deg);
        margin-left: 4px;
    }

    .embla__arrow--right {
        transform: rotate(-45deg);
        margin-right: 4px;
    }

    .embla__dots {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 15;
    }

    .embla__dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        border: 1px solid var(--scrollbar-border);
        background: transparent;
        cursor: pointer;
        padding: 0;
        transition:
            background-color 0.2s ease,
            transform 0.2s ease;
    }

    .embla__dot.is-selected {
        width: 12px;
        height: 12px;
        background: var(--scrollbar-thumb);
        transform: translateY(-1px);
    }

    @media (max-width: 900px) {
        .embla__nav {
            width: 36px;
            height: 36px;
        }

        .embla__nav--prev {
            left: 0.5rem;
        }

        .embla__nav--next {
            right: 0.5rem;
        }

        p {
            margin: 4% 18% 0 18%;
            font-size: 1rem;
        }
    }
`;
export default Container;
