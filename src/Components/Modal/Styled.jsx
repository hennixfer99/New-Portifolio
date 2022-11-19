import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 3;

  align-items: center;
  padding: 0 auto;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  header {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
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
    padding: 0px 30px 10px 30px;
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
    color: white;
    background-color: #4529e6;
    height: 32px;
    padding: 0 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: #bdb4dc transparent;
  }
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #bdb4dc;
    border-radius: 8px;
    border: none;
  }
  @media (max-width: 450px) {
  }
`;
const Modal = styled.form`
  margin: 2% auto 2% auto;
  background: #ffffff;
  border: 1px solid black;
  max-width: 530px;
  max-height: 90vh;
  border-radius: 8px;
  overflow-y: scroll;
  @media (max-width: 450px) {
    margin: 5% auto;
  }
`;

export { Container, Modal };
