import Container from "./Styled";
import menu from "../../imgs/Menu.png";
import Menu from "../Menu/Menu";
import gh from "../../imgs/github.png";
import lk from "../../imgs/linkedin.png";
import logo from "../../imgs/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    function menuAtivo() {
        if (menuOpen === true) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    }

    useEffect(() => {
        const windowSize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", windowSize);
        return () => {
            window.removeEventListener("resize", windowSize);
        };
    }, []);

    return (
        <Container>
            {width > breakpoint ? (
                <ul className="buttons-homepage">
                    {/* <img alt="minha logo HFM que significa Henrique Ferreira Mendes" src={logo} className="hfm"/> */}
                    <Link to="/">
                        <li>Sobre</li>
                    </Link>
                    <Link to="/projetos">
                        <li>Projetos</li>
                    </Link>
                    <Link to="/qualificacoes">
                        <li>Qualificações</li>
                    </Link>
                    <span className="my-networks">
                        <a
                            href="https://github.com/hennixfer99"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
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
                            onClick={() => setMenuOpen(false)}
                        >
                            <img
                                src={lk}
                                alt="Acessar meu perfil profissional no LinkedIn"
                            />
                        </a>
                    </span>
                </ul>
            ) : (
                <figure>
                    <img
                        className="menu"
                        alt="logo"
                        src={menu}
                        onClick={menuAtivo}
                    />
                </figure>
            )}

            <Menu abrir={menuOpen} sair={setMenuOpen} />
        </Container>
    );
}

export default Header;
