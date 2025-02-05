import styled from "styled-components";

const Container = styled.div`


.modalOpen{
    background-color: transparent;
    display: flex;
    border-radius: 4px;
    height: 32px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    margin: 10px 0;
}

button:hover{
    color: white;
    background-color: rgba(0, 0, 0, 0.30);

}

.cards{
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.Modal{
    background-color: rgba(222, 226, 230, 0.7);
    border-radius: 8px;
    max-width: 100%;
    width: 80vw;
    height: 80vh;
    margin: 1.5% auto;
    -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

@media (max-width: 500px){
    
    .Modal{
        overflow-y: auto;
        width: 80%;
    }
}

`

export default Container