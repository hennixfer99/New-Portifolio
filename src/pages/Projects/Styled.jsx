import styled from "styled-components";

const Container = styled.div`
    .modalOpen {
        background-color: transparent;
        display: flex;
        border-radius: 4px;
        height: 32px;
        text-align: center;
        align-items: center;
        cursor: pointer;
        margin: 10px 0;
    }

    button {
        padding: 15px;
        border: 0.3px solid #a4a7aa;
        border-radius: 8px;
    }

    button:hover {
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
        background-color: rgba(222, 226, 230, 0.7);
        border-radius: 8px;
        max-width: 100%;
        width: 80vw;
        height: 80vh;
        margin: 1.5% auto;
        -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    @media (max-width: 725px) {
        .Modal {
            overflow-y: auto;
            padding: 15px 3%;
            width: 80%;
        }
    }
`;

export default Container;
