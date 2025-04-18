import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    align-items: center;
    z-index: 1;
    padding: 0;
    width: 100%;
    margin-top: -1.5%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    * {
        scrollbar-width: auto;
        scrollbar-color: #bdb4dc transparent;
    }
    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    *::-webkit-scrollbar-thumb {
        background-color: #bdb4dc;
        border-radius: 8px;
        border: 1px solid grey;
    }
`;
const Modal = styled.div`
    margin: 7% auto;
    background-color: #dee2e6;
    border: 1px solid black;
    max-width: 530px;
    padding: 0 0;
    z-index: 10;
    height: 55vh;
    border-radius: 8px;
    overflow-y: scroll;

    header {
        max-width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header h2 {
        font-size: 18px;
    }

    header button {
        border: none;
        background-color: transparent;
        font-size: 25px;
        color: grey;
        cursor: pointer;
    }

    main {
        margin: 0 auto;
        padding: 15px 25px;
    }

    img {
        display: block;
        margin: auto;
        max-width: 15rem;
        max-height: 7rem;
        border-radius: 8px;
    }

    main h2 {
        font-weight: 500;
        font-size: 16px;
    }

    main p {
        font-weight: 400;
        font-size: 14px;
    }
    main button {
        color: black;
        background-color: rgba(0, 0, 0, 0.11);
        height: 32px;
        padding: 0 20px;
        border: 1px solid black;
        border-radius: 4px;
        cursor: pointer;
    }

    .square2 {
        display: flex;
        flex-direction: column;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px; 
    }

    @media (max-width: 725px) {
        h1{
            font-size: 20px;
        }
        max-width: 85%;
    }
`;

export { Container, Modal };
