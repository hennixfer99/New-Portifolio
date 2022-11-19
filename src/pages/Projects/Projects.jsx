import Container from './Styled';
import Particle from "../../Components/Particles/Particles"
import { useState } from 'react';
import { Modal } from '../../Components/Modal/Styled';

function Projects() {

  const [modalOpen, setModalOpen] = useState(false);
  

  return (
  <Container>
  <Particle />
  <div className='Modal'>
    <div className='front'>
    <h2>Projetos de front-end</h2>
    
    <button onClick={() => {setModalOpen(true)}}>  
     

     <Modal 
     setModalOpen = {setModalOpen}
     modalOpen={modalOpen}
     title="Kenzie hub"
     description ="Foi um projeto individual onde fiz meus primeiros testes de
     conhecimento em react, o objetivo era fazer um site onde o usuário pode
     se cadastrar e salvar as tecnologias listadas por ele em níveis de
     dificuldade."
     tecnologies = "react"
     />    
     <h2>Kenzie hub</h2>
        {/* <p>
        Foi um projeto individual onde fiz meus primeiros testes de
        conhecimento em react, o objetivo era fazer um site onde o usuário pode
        se cadastrar e salvar as tecnologias listadas por ele em níveis de
        dificuldade.
        </p> */}
    </button>
    
    <li>  
      <h2>Kenzie shop</h2>
        <p>
        Projeto simulando um E-commerce aonde comecei a praticar Redux e Thunk durante a execução.
        </p>
    </li>
    

    <li>
      <h2>Torre de Hanoi</h2>
        <p>Foi um projeto individual onde fiz a criação do jogo torre de Hanoi com 3
        dificuldades diferentes e design responsivo.
        </p>
        <h4>DOM</h4>
    </li>
    

    <li>
    <h2>My Plant</h2>
    <p>Foi um projeto realizado em grupo onde gostaríamos que amantes de
    plantas se adicionassem para que pudessem fazer trocas de mudas, saber
    mais sobre como zelar de suas plantas e pudessem se sentir confortáveis
    com o minimalismo nas páginas.
    </p>
    </li>

    </div>



  </div>
  </Container>
  );
}

export default Projects