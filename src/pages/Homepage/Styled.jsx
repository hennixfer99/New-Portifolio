import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    box-sizing: border-box;
    .modal {
        background-color: rgba(222, 226, 230, 0.7);
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
    .aboutMe {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        max-width: 45%;
        margin: 0 5px;
    }
    .me {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 0 5px;
        text-align: center;
    }
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 14px;
    }

    .personal-img {
        background-color: grey;
        border: 1px solid black;
        border-radius: 20px;
        width: 205px;
        height: 215px;
        margin: 0 auto;
    }
    .tecnologies {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-height: 250px;
        margin: 0 10px;
        overflow: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }

    .tecnologies a {
        width: 80px;
        margin: 1px 1px;
        padding: 5px 1px;
        text-align: center;
        text-decoration: none;
        color: #000;
    }

    .tecnologies a:hover {
        border: 1px solid #bdb4dc;
        cursor: pointer;
    }

    .tecnologies img {
        max-width: 50px;
        max-height: 50px;
    }
    * {
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
    @media (max-width: 1024px) {
        .tecnologies {
            max-height: 100px;
            width: 9 5%;
        }
        .tecnologies a {
            width: 60px;
            text-align: center;
        }
        .tecnologies img {
            width: 25px;
            height: 25px;
        }
    }
    @media (max-width: 725px) {
        .modal {
            padding: 15px 3%;
            width: 80%;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .personal-img {
            max-width: 150px;
            height: 160px;
        }

        .me {
            height: 250px;
            justify-content: space-around;
        }
        .aboutMe {
            max-width: 100%;
        }
        h2 {
            font-size: 14px;
        }
        p {
            font-size: 12px;
        }
    }
    @media (max-width: 376px) {
        .tecnologies {
            max-height: 90px;
            width: 95%;
        }
    }
`;

export default Container;
