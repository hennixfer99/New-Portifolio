import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    .modal {
        background-color: rgba(222, 226, 230, 0.9);
        border-radius: 8px;
        max-width: 100%;
        width: 80vw;
        height: 80vh;
        margin: 1.5% auto;
        -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
    }
    .first-block {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 30rem;
        margin: 0 auto;
    }
    .aboutMe {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        max-width: 50%;
        margin: 0 5px;
    }
    .me {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 35px 5px;
        text-align: center;
    }
    h2 {
        text-align: center;
        font-size: 20px;
    }
    .aboutMe p {
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
        max-height: 9rem;
        margin: 0 15px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .tecnologies a {
        width: 80px;
        margin: 1px 15px;
        padding: 5px 5px;
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
    @media (max-width: 800px), (max-height: 855px) {
        .tecnologies {
            max-height: 6.5rem;
            flex-wrap: nowrap;
            overflow: auto;
            overflow-x: auto;
            overflow-y: hidden;
        }
        .tecnologies img {
            width: 30px;
            height: 30px;
        }
    }
    @media (max-width: 770px) {
        .modal {
            padding: 0 3%;
            width: 80%;
            justify-content: space-between;
        }

        .personal-img {
            max-width: 150px;
            height: 160px;
        }

        .first-block {
            flex-direction: column-reverse;
        }

        .me {
            margin: 15px 0;
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

        .skills {
            margin-top: 4rem;
        }
        .tecnologies {
            max-width: 82%;
            margin: 0 auto;
        }
    }
    @media (max-width: 400px) and (min-height: 700px) {
        .modal {
            height: 90vh;
        }
        .first-block {
            margin-top: 2rem;
        }
        .skills {
            margin-top: 7rem;
        }
        .tecnologies {
            max-width: 90%;
            margin: 0 auto;
        }
    }
    @media (max-width: 400px) and (max-height: 690px) {
        .modal {
            height: 100vh;
        }
        .first-block {
            margin-top: 2rem;
        }
        .skills {
            margin-top: 7rem;
        }
        .tecnologies {
            max-width: 90%;
            margin: 0 auto;
        }
    }
`;

export default Container;
