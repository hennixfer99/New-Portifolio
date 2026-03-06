import Container from "./Styled";
import menu from "../../imgs/Menu.png";
import Menu from "../Menu/Menu";
import gh from "../../imgs/github.png";
import lk from "../../imgs/linkedin.png";
import logo from "../../imgs/logo.png";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [sobreActive, setSobreActive] = useState("");
    const [projectsActive, setProjectsActive] = useState("");
    const [diplomsActive, setDiplomsActive] = useState("");
    const breakpoint = 700;

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

    const isDarkTheme = theme === "dark";

    function renderThemeSwitch(extraClassName = "") {
        const classes = `theme-toggle ${extraClassName}`.trim();

        return (
            <button
                type="button"
                className={classes}
                onClick={toggleTheme}
                aria-label={
                    isDarkTheme ? "Ativar modo claro" : "Ativar modo escuro"
                }
                aria-pressed={isDarkTheme}
            >
                <span className="theme-icon sun" aria-hidden="true">
                    <span className="icon-glyph">
                        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                            <circle
                                cx="12"
                                cy="12"
                                r="4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <line x1="12" y1="1.5" x2="12" y2="4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="12" y1="19.5" x2="12" y2="22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="1.5" y1="12" x2="4.5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="19.5" y1="12" x2="22.5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4.3" y1="4.3" x2="6.4" y2="6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="17.6" y1="17.6" x2="19.7" y2="19.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4.3" y1="19.7" x2="6.4" y2="17.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <line x1="17.6" y1="6.4" x2="19.7" y2="4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                </span>
                <span className="theme-icon moon" aria-hidden="true">
                    <span className="icon-glyph">
                        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                            <path
                                d="M20.8 13.6A8.8 8.8 0 1 1 10.4 3.2a7.2 7.2 0 1 0 10.4 10.4Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </span>
                <span className="theme-thumb" aria-hidden="true" />
            </button>
        );
    }

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
                                onClick={() =>
                                    (window.location.href = "/sobre")
                                }
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
                                }}
                            >
                                Qualificações
                            </NavLink>
                        </li>
                        <li>{renderThemeSwitch()}</li>
                        {/* <li>
                            <NavLink
                                to="/contato"
                                className={contactActive}
                                onClick={() => {
                                    setSobreActive("");
                                    setProjectsActive("");
                                    setDiplomsActive("");
                                    setContactActive("active");
                                }}
                            >
                                Contato
                            </NavLink>
                        </li> */}

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

                    {renderThemeSwitch("mobile-toggle")}
                </nav>
            )}

            <Menu abrir={menuOpen} sair={setMenuOpen} />
        </Container>
    );
}
export default Header;
