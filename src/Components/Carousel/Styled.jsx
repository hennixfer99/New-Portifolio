import styled from "styled-components";

const Container = styled.div`

overflow: hidden;

.inner{
    white-space: nowrap;
    border-radius: 8px;
    transition: transform 0.3s;
}
.carousel-item{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 77vh;
}
.indicators{
    display: flex;
    justify-content: space-between; 
}
.indicators > button{
    margin: 0 10px;
    background-color: transparent;
    border: 0.5px solid;
    border-radius: 8px;
    cursor: pointer;
}
.indicators > button.active {
    background-color: rgba(0,0,0, 0.5);
}
button:hover{
    background-color: rgba(0,0,0, 0.2);
}
`

export default Container