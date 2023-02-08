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
    z-index: -1;
    height: 400px;
    max-width: 80%;
    -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 6px 10px 6px rgba(0, 0, 0, 0.63);
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