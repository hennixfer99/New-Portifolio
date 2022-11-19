import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.63);
  background-color: #dee2e6;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 13vh;

  h1 {
    color: white;
    margin-left: 2%;
    font-size: 20px;
  }
  .menu {
    cursor: pointer;
    max-width: 30px;
  }
  .logozinha {
    max-width: 80%;
    margin: 0 4%;
    cursor: pointer;
  }

  button{
    background-color: transparent;
    border: none;
  }

  button img{
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
  p {
    color: #4529e6;
  }
  .breakpoint {
    text-align: center;
    align-items: center;
    padding: 4.5vh 25px 4.5vh 0;
    border-right: 1.5px solid #adb5bd;
  }

  .cadastre-se2 {
    padding: 0 45px 0 20px;
    height: 40px;
    width: 80%;
    color: #0b0d0d;
    background-color: transparent;
    border-radius: 4px;
    border: 1.5px solid #adb5bd;
    justify-content: center;
    cursor: pointer;
  }

`;
export default Container;
