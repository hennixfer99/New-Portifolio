import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.63);
    background-color: var(--header-color);
    backdrop-filter: blur(5px);
    width: 100%;
    height: 8vh;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 8vh;
        z-index: 1000;
    }
    .logo {
        width: 45px;
        height: 40px;
        border: 1px solid black;
        border-radius: 12px;
        cursor: pointer;
    }

    .my-networks {
        display: inline-block;
    }

    nav a {
        text-decoration: none;
        color: var(--black);
        padding-bottom: 4px;
        transition: border-bottom 0.2s;
    }

    nav a.active {
        border-bottom: 1px solid black;
        font-weight: bold;
    }
    nav a img {
        max-width: 60px;
        max-height: 32px;
        cursor: pointer;
    }
    .buttons-homepage {
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto;
        height: 100%;
        align-items: center;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    li {
        max-height: 100%;
        color: #495057;
        font-size: 1.1rem;
    }
    .breakpoint {
        text-align: center;
        align-items: center;
        padding: 4.5vh 25px 4.5vh 0;
        border-right: 1.5px solid #adb5bd;
    }
    @media (max-width: 700px) {
        nav {
            max-width: 80%;
            margin: 0 auto;
        }
        .menu {
            cursor: pointer;
            max-width: 30px;
        }
    }
`;
export default Container;
