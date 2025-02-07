import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    align-items: center;
    z-index: 20;
    padding: 0;
    width: 100%;
    padding-top: 5%;
    margin-top: -1.5%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity, 1s;

    header {
        max-width: 90%;
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
        height: 65%;
        margin: 0 auto;
        padding: 20px 30px 10px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        opacity: 0;
        transition: opacity, 1s;
    }

    main h2 {
        font-weight: 500;
        font-size: 16px;
    }
    main img {
        max-height: 19vh;
        max-width: 100%;
        border-radius: 8px;
    }
    .img {
        text-align: center;
    }

    main p {
        max-width: 100%;
        text-align: center;
    }
    &.active {
        opacity: 1;
        transition: opacity, 1s;
    }

    &.active .modal, main{
        opacity: 1;
        transition: opacity, 1s;
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

    @media (max-width: 725px) {
        max-width: 80%;
    }
`;

export { Container, Modal };
