import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    align-items: center;
    z-index: 20;
    width: 100%;
    margin-top: -8rem;
    padding-top: 8rem;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
    margin: 7% auto;
    background-color: #dee2e6;
    border: 1px solid black;
    max-width: 530px;
    padding: 0;
    z-index: 10;
    height: 55vh;
    border-radius: 8px;
    overflow-y: scroll;

    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.3s ease, transform 0.3s ease;

    &.active {
        opacity: 1;
        transform: scale(1);
    }

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
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    &.active main {
        opacity: 1;
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
        h1 {
            font-size: 20px;
        }
        max-width: 85%;
    }
`;
export { Container, Modal };
