import styled from "styled-components";

const Container = styled.div`
    .Modal {
        background-color: rgba(222, 226, 230, 0.9);
        border-radius: 8px;
        max-width: 100%;
        width: 80vw;
        height: 80vh;
        margin: 1.5% auto;
        -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
        display: flex;
        justify-content: space-around;
    }

    img {
        z-index: 10;
        height: 400px;
        max-width: 80%;
        -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
    }

    @media (max-width: 725px), (max-height: 400px) {
        .Modal {
            padding: 15px 3%;
            width: 80%;
        }
        .cards {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            max-height: 75%;
        }
        .cards button {
            padding: 15px 0;
            border: 0.3px solid #a4a7aa;
            color: #000;
            background: transparent;
            border-radius: 8px;
        }
        .cards button:hover {
            color: white;
            border: 0.5px solid #494b4c;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
`;

export default Container;
