import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 2;
    align-items: center;
    -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.63);
    background-color: #dee2e6;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 8vh;

    h1 {
        color: white;
        margin-left: 2%;
        font-size: 20px;
    }
    .menu {
        cursor: pointer;
        max-width: 30px;
    }
    .logo {
        width: 40px;
        height: 40px;
        margin: 0 9%;
        cursor: pointer;
    }

    .my-networks {
        display: inline-block;
    }

    a {
        background-color: transparent;
        border: none;
    }
    a img {
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
    }
    .breakpoint {
        text-align: center;
        align-items: center;
        padding: 4.5vh 25px 4.5vh 0;
        border-right: 1.5px solid #adb5bd;
    }
`;
export default Container;
