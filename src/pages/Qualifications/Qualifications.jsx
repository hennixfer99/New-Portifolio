import Container from './Styled';
import Particle from "../../Components/Particles/Particles"
import kenzieFront from "../../imgs/kenzie1.png"
import kenzieFullStack from "../../imgs/kenzieFullStack.png"
import React from 'react';
import Carousel, { CarouselItem } from '../../Components/Carousel/Carousel';

function Qualifications({ children }) {
  
  return (
    <Container>
    <Particle />
    <div className='Modal'>
    <Carousel>
      <CarouselItem>
        <img alt='kenzie1' src={kenzieFront}/>
      </CarouselItem>
      <CarouselItem>
        <img alt='kenzie2' src={kenzieFullStack}/>
      </CarouselItem>
    </Carousel>
    </div>
    </Container>
    );
}

export default Qualifications