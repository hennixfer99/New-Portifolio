import { Link } from "react-router-dom";
import Container from "./Styled";
import github from "../../imgs/github.png"
import linkedin from "../../imgs/linkedin.png"


function Menu({abrir, sair, link1, link2}){
      
return (
  <Container className={abrir ? 'active' : null}>
  <div className="menu-animation">
  <header> 
  <button className="buttonreturn" onClick={() => sair(false)}>x</button>
  </header>
  <main>
      <Link to = "/">
       <li>Sobre</li>
      </Link>
      <Link to = "/projetos">
       <li>Projetos</li>
      </Link>
      <Link to = "/qualificacoes">
       <li>Qualificações</li>
      </Link>
      <button onClick={link1}><img src = {github} alt="github"/></button>
      <button onClick={link2}><img src = {linkedin} alt="linkedin"/></button>
  </main>
  
  </div>
  </Container>
)}

export default Menu