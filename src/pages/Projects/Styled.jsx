import styled from "styled-components";

const Container = styled.div`
    button {
        background-color: transparent;
        border-radius: 4px;
        cursor: pointer;
        margin: 10px 0;
        padding: 15px;
        color: #000;
        border: 0.5px solid #a4a7aa;
        background-color: transparent;
        border-radius: 8px;
    }

    .cards button:hover {
        color: white;
        border: 0.5px solid #494b4c;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .cards {
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .Modal {
        background-color: rgba(222, 226, 230, 0.9);
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
