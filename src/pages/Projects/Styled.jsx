import styled from "styled-components";

const Container = styled.div`
    button {
        background-color: transparent;
        border-radius: 4px;
        cursor: pointer;
        margin: 10px 0;
        padding: 15px;
        color: var(--black);
        border: 0.5px solid var(--border-soft);
        background-color: transparent;
        border-radius: 8px;
    }

    .cards button:hover {
        color: var(--hover-text);
        border: 0.5px solid var(--hover-border);
        background-color: var(--hover-background);
    }

    .cards {
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .Modal {
        background-color: var(--modal-background);
        border: 1px solid var(--border-soft);
        border-radius: 8px;
        max-width: 100%;
        width: 80vw;
        height: 80vh;
        margin: 8rem auto 1rem auto;
        -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    @media (max-width: 725px), (max-height: 400px) {
        .Modal {
            overflow-y: auto;
            padding: 0 3%;
            width: 80%;
            height: 90vh;
            margin: 4rem auto 1rem auto;
        }
    }
`;

export default Container;
