import Container from "./Styled";
import menu from "../../imgs/Menu.png";
import Menu from "../Menu/Menu";
import gh from "../../imgs/github.png";
import lk from "../../imgs/linkedin.png";
import logo from "../../imgs/logo.png";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [sobreActive, setSobreActive] = useState("");
    const [projectsActive, setProjectsActive] = useState("");
    const [diplomsActive, setDiplomsActive] = useState("");
    const [contactActive, setContactActive] = useState("");
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
                <nav>
                    <ul className="buttons-homepage">
                        <li>
                            <img
                                className="logo"
                                alt="minha logo, caso queira retornar a página de sobre mim, pressione"
                                src={logo}
                                onClick={() => (window.location.href = "/sobre")}
                            />
                        </li>

                        <li>
                            <NavLink
                                to="/sobre"
                                className={sobreActive}
                                onClick={() => {
                                    setSobreActive("active");
                                    setProjectsActive("");
                                    setDiplomsActive("");
                                    setContactActive("");
                                }}
                            >
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projetos"
                                className={projectsActive}
                                onClick={() => {
                                    setSobreActive("");
                                    setProjectsActive("active");
                                    setDiplomsActive("");
                                    setContactActive("");
                                }}
                            >
                                Projetos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/qualificacoes"
                                className={diplomsActive}
                                onClick={() => {
                                    setSobreActive("");
                                    setProjectsActive("");
                                    setDiplomsActive("active");
                                    setContactActive("");
                                }}
                            >
                                Qualificações
                            </NavLink>
                        </li>

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
                </nav>
            ) : (
                <nav>
                    <img
                        className="menu"
                        alt="logo"
                        src={menu}
                        onClick={menuAtivo}
                    />

                    <img
                        className="logo"
                        alt="minha logo, caso queira retornar a página de sobre mim, pressione"
                        src={logo}
                        onClick={() => {
                            setMenuOpen(false);
                            window.location.href = "/sobre";
                        }}
                    />
                </nav>
            )}

            <Menu abrir={menuOpen} sair={setMenuOpen} />
        </Container>
    );
}
export default Header;
