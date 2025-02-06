import styled from "styled-components";

const Container = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 5;
    .inner {
        white-space: nowrap;
        border-radius: 8px;
        transition: transform 0.3s;
    }
    .carousel-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        height: 77vh;
    }

    .indicators {
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
    }
    .indicators > button {
        padding: 0 15px;
        background-color: transparent;
        border: 0.3px solid #a4a7aa;
        border-radius: 8px;
        cursor: pointer;
    }
    .indicators > button.active {
        color: white;
        border: 0.5px solid #494b4c;
        background-color: rgba(0, 0, 0, 0.3);
    }
    button:hover {
        color: white;
        border: 0.5px solid #494b4c;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;
export default Container;
