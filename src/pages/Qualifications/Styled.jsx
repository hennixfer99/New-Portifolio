import styled from "styled-components";

const Container = styled.div`
.Modal{
    background-color: rgba(222, 226, 230, 0.8);
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

img{
    max-width: 80%;
    max-height: 500px;
    margin: 40px;
    border-radius: 8px;

}

@media (max-width: 500px){
    
    .modal{
        padding: 15px 0;
        width: 80%;
    }
    img{
        max-height: 225px;
        margin: 40% 0;
    }
        }

`

export default Container