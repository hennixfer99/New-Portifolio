import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    .modal {
        background-color: var(--modal-background);
        border-radius: 8px;
        max-width: 100%;
        width: 80vw;
        height: 80vh;
        margin: 8rem auto 1rem auto;
        -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
    }
`;

export default Container;
