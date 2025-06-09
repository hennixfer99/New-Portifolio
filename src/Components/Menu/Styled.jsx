import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    max-width: 300px;
    height: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    background-color: transparent;
    transition: height 1s;
    z-index: 1050;
    menu::-webkit-scrollbar {
        width: 0px;
    }
    .menu-animation {
        z-index: 1050;
        max-height: 100%;
    }
    header {
        background-color: #dee2e6;
        height: 8vh;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 15px;
    }
    .buttonreturn {
        text-align: center;
        padding: 0 20px 32px 20px;
        background-color: #dee2e6;
        border-radius: 8px;
        font-size: 1.56rem;
        height: 20px;
        color: var(--black);
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity, 1s;
    }

    main {
        border: 1.5px solid #adb5bd;
        background-color: #dee2e6;
        backdrop-filter: blur(5px);
        z-index: 1;
        border-radius: 0 0 8px 8px;
        opacity: 0;
        transition: opacity, 1s;
    }
    img {
        max-width: 60px;
        max-height: 32px;
        margin-bottom: 20px;
    }
    a {
        margin-left: 20px;
    }
    li {
        height: 40px;
        margin: 20px 35px;
        cursor: pointer;
        text-align: start;
        list-style: none;
        opacity: 0;
        font-weight: 600;
        color: #495057;
        font-size: 1.3rem;
    }
    &.active {
        height: 600px;
    }
    &.active main {
        opacity: 1;
        transition: opacity, 1s;
    }
    &.active .menu-animation {
        z-index: 1050;
    }
    &.active li,
    &.active button {
        opacity: 1;
        transition: opacity, 0.5s;
    }
    &.active button p {
        opacity: 1;
        transition: opacity, 0.2s;
    }
`;

export default Container;
