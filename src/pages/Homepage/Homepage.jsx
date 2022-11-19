import Particle from "../../Components/Particles/Particles"
import Container from './Styled';
import Rick from "../../imgs/eu.png"

function Homepage() {

  

  return (
  <Container>
  <Particle />
  <div className='modal'>
    
    <section className="me">
        <img src={Rick} alt="eu" />
        <h2>Henrique Ferreira Mendes</h2>
    </section>
    
    
    <section className="aboutMe">
    <article>
    <h2>Sobre mim:</h2>
    <p>Sou um Desenvolvedor Full-Stack formado pela Kenzie Academy Brasil, adoro estudar e aprender mais sobre essa área incrivel que é a programação e desenvolvimento, estou ingressando
    pela primeira vez neste mercado afim de adquirir mais conhecimento e resolver problemas.</p>
    </article>
    <article>
    <h2>Competencias:</h2>
    <p> HTML | JavaScript | CSS | GIT | React | Redux | TypeScript | Figma | Beekeper | Node.Js | Python |</p>
    </article>
    </section>
  </div>
  </Container>
  );
}

export default Homepage