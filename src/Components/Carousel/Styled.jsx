import styled from "styled-components";

const Container = styled.div`
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
`;
export default Container;
