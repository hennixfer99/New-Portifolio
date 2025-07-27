import { Link } from "react-router-dom";
import Container from "./Styled";
import gh from "../../imgs/github.png";
import lk from "../../imgs/linkedin.png";

function Menu({ abrir, sair }) {
    return (
        <Container
            className={abrir ? "active" : null}
            onClick={() => sair(false)}
        >
            <header onClick={(e) => e.stopPropagation()}>
                <button className="buttonreturn" onClick={() => sair(false)}>
                    X
                </button>
            </header>
            <div
                className="menu-animation"
                onClick={(e) => e.stopPropagation()}
            >
                <main>
                    <Link to="/sobre" onClick={() => sair(false)}>
                        <li>Sobre</li>
                    </Link>
                    <Link to="/projetos" onClick={() => sair(false)}>
                        <li>Projetos</li>
                    </Link>
                    <Link to="/qualificacoes" onClick={() => sair(false)}>
                        <li>Qualificações</li>
                    </Link>
                    {/* <Link to="/contato" onClick={() => sair(false)}>
                        <li>Contato</li>
                    </Link> */}
                    <a
                        href="https://github.com/hennixfer99"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sair(false)}
                    >
                        <img
                            src={gh}
                            alt="Acessar meus repositórios no GitHub"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/henrique-ferreira-mendes-0012451b2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sair(false)}
                    >
                        <img
                            src={lk}
                            alt="Acessar meu perfil profissional no LinkedIn"
                        />
                    </a>
                </main>
            </div>
        </Container>
    );
}

export default Menu;
