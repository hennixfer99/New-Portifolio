import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    .modal {
        background-color: var(--modal-background);
        border-radius: 8px;
        max-width: 100%;
        width: 80vw;
        height: 80vh;
        margin: 8rem auto 1rem auto;
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
        max-width: 45%;
    }
    .me {
        display: flex;
        flex-direction: column;
        height: 75%;
        justify-content: space-evenly;
        text-align: center;
    }
    .me h2 {
        margin: 0 0;
    }
    h2 {
        text-align: center;
        font-size: 1.25rem;
    }
    .aboutMe p {
        font-size: 0.875rem;
    }

    .personal-img {
        background-color: grey;
        border: 1px solid var(--black);
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
        color: var(--black);
    }

    .tecnologies a:hover {
        border: 1px solid #bdb4dc;
        cursor: pointer;
    }

    .tecnologies img {
        max-width: 50px;
        max-height: 50px;
    }

    @media (max-width: 800px), (max-height: 855px) {
        .aboutMe {
            margin: 0px 5px;
        }
        .tecnologies {
            max-height: 7rem;
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
    @media (max-width: 770px), (max-height: 800px) {
        .modal {
            display: flex;
            flex-direction: column;
            padding: 0 3%;
            width: 80%;
            margin-top: 3rem;
            justify-content: space-evenly;
            height: 100vh;
        }

        .personal-img {
            max-width: 150px;
            height: 160px;
        }

        .first-block {
            flex-direction: column-reverse;
            height: 40rem;
        }

        .me {
            margin: 15px 0;
        }

        .aboutMe {
            max-width: 100%;
            padding: 0 15px;
        }

        h2 {
            font-size: 0.875rem;
        }
        p {
            font-size: 0.75rem;
        }
        .tecnologies {
            max-width: 85%;
            margin: 0 auto;
        }
    }

    @media (max-width: 770px) {
        .skills {
            margin-top: 5rem;
        }
    }

    @media (max-width: 450px) and (max-height: 850px) {
        .modal {
            height: 140vh;
        }

        .tecnologies {
            max-width: 100%;
            margin: 0 auto;
        }
        .skills {
            margin-top: 0rem;
        }
    }
`;

export default Container;
