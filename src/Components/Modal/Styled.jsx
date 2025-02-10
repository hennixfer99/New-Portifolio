import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    align-items: center;
    z-index: 20;
    padding: 0;
    width: 100%;
    margin-top: -1.5%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    header {
        max-width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: baseline;
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
        max-width: 100%;
        margin: 0 auto;
        padding: 20px 30px 10px 30px;
    }

    main img {
        max-width: 60%;
        max-height: 50%;
        border-radius: 8px;
    }
    .img {
        max-width: 100%;
        text-align: center;
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
    @media (max-width: 725px) {
        margin-top: -4%;
    }
    @media (max-width: 550px) {
        margin-top: -4.5%;
    }
    @media (max-width: 422px) {
        margin-top: -5%;
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

    h4 {
        font-weight: 600;
    }
    h5 {
        font-weight: 400;
    }

    .tec {
        max-width: 65%;
    }
    .square2 {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .project {
        display: flex;
        flex-direction: column;
    }
    .project button {
        margin-top: 20px;
    }

    @media (max-width: 725px) {
        max-width: 80%;
    }
`;

export { Container, Modal };
