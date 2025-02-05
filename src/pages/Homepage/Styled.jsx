import styled from "styled-components";

const Container = styled.div`
max-width: 100%;
box-sizing: border-box;
.modal{
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
.aboutMe{
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 max-width: 45%;
 margin: 0 5px;
}
.me{
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 margin:0 5px;
 text-align: center;
}
h2{
 font-size: 20px;
}
p{
 font-size: 14px;
}

img{
  background-color: grey;
  border: 1px solid black;
  border-radius: 100%;
  width: 205px;
  height: 215px;
  margin: 0 auto;
}

@media (max-width: 500px){
    
        .modal{
            padding: 15px 0;
            width: 80%;
        }

    img{
        max-width: 125px;
        height: 130px;
    }

    .me{
        margin: 30% 5px;
        justify-content: space-around;
        
    }
    .aboutMe{
        margin-right: 5px;
    }
    h2{
        font-size: 14px;
    }
    p{
        font-size: 12px;
    }
}

`

export default Container