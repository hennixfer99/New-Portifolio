import Container from "./Styled";
import menu from "../../imgs/Menu.png";
import Menu from "../Menu/Menu";
import gh from "../../imgs/github.png";
import lk from "../../imgs/linkedin.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    function github() {
        const redirect = window.open("https://github.com/hennixfer99");
        setMenuOpen(false);
        return redirect;
    }
    function linkedin() {
        const redirect = window.open(
            "https://www.linkedin.com/in/henrique-ferreira-mendes-0012451b2/"
        );
        setMenuOpen(false);
        return redirect;
    }

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
                    <Link to="/">
                        <li>Sobre</li>
                    </Link>
                    <Link to="/projetos">
                        <li>Projetos</li>
                    </Link>
                    <Link to="/qualificacoes">
                        <li>Qualificações</li>
                    </Link>

                    <button onClick={github}>
                        <img src={gh} alt="github" />
                    </button>

                    <button onClick={linkedin}>
                        <img src={lk} alt="linkedin" />
                    </button>
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

            <Menu
                abrir={menuOpen}
                sair={setMenuOpen}
                link1={github}
                link2={linkedin}
            />
        </Container>
    );
}

export default Header;
