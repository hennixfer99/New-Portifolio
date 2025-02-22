import Particle from "../../Components/Particles/Particles";
import Container from "./Styled";
import Rick from "../../imgs/eu.jpeg";
import html from "../../imgs/html.png";
import js from "../../imgs/js.png";
import css from "../../imgs/css.png";
import git from "../../imgs/git.png";
import react from "../../imgs/react.png";
import ts from "../../imgs/ts.png";
import figma from "../../imgs/figma.png";
import beekeeper from "../../imgs/beekeeper.png";
import node from "../../imgs/nodejs.png";
import python from "../../imgs/python.png";
import express from "../../imgs/express.png";
import sql from "../../imgs/sql.png";
import angularjs from "../../imgs/angularjs.png";
import azure from "../../imgs/azure.png";
import apiRest from "../../imgs/apiRest.png";
import nextjs from "../../imgs/nextjs.svg";
import postegressql from "../../imgs/postgressql.png";
import linux from "../../imgs/linux.png";

function Homepage() {
    return (
        <Container>
            <Particle />
            <div className="modal">
                <section className="me">
                    <img
                        src={Rick}
                        alt="Uma imagem minha encima do prédio da Oracle em uma visita técnica junto a Faculdade"
                        className="personal-img"
                    />
                    <h2>Henrique Ferreira Mendes</h2>
                </section>

                <div className="aboutMe">
                    <section>
                        <h2>Sobre mim:</h2>
                        <p>
                            Sou Desenvolvedor Web Full Stack, formado pela
                            Kenzie Academy Brasil e atualmente cursando Ciência
                            da Computação e Sistemas para Internet nas
                            universidades Cruzeiro do Sul e Fatec Rubens Lara.
                            Tenho um sólido conhecimento e experiência no
                            desenvolvimento de aplicações web eficientes e
                            responsivas, com foco em práticas de programação que
                            garantem soluções de alta qualidade. Comprometido
                            com o aprendizado contínuo, busco sempre aprimorar
                            minhas habilidades e aplicar as melhores práticas no
                            meu trabalho. 
                        </p>
                    </section>
                    <section>
                        <h2>Competências:</h2>
                        <div className="tecnologies">
                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="HTML 5" src={html} />
                                <p>HTML</p>
                            </a>
                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="js" src={js} />
                                <p>JavaScript</p>
                            </a>
                            <a
                                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="css" src={css} />
                                <p>CSS</p>
                            </a>
                            <a
                                href="https://git-scm.com/docs/git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="git" src={git} />
                                <p>GIT</p>
                            </a>
                            <a
                                href="https://react.dev/learn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="react" src={react} />
                                <p>React</p>
                            </a>
                            <a
                                href="https://www.typescriptlang.org/docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="ts" src={ts} />
                                <p>TypeScript</p>
                            </a>
                            <a
                                href="https://help.figma.com/hc/en-us/categories/360002042553"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="figma" src={figma} />
                                <p>Fígma</p>
                            </a>
                            <a
                                href="https://docs.beekeeperstudio.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="beekeeper" src={beekeeper} />
                                <p>Beekeeper</p>
                            </a>
                            <a
                                href="https://nodejs.org/docs/latest/api/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="node.js" src={node} />
                                <p>Node.Js</p>
                            </a>
                            <a
                                href="https://docs.python.org/3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="python" src={python} />
                                <p>Python</p>
                            </a>
                            <a
                                href="https://expressjs.com/pt-br/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="express" src={express} />
                                <p>Express</p>
                            </a>
                            <a
                                href="https://www.w3schools.com/sql/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="sql" src={sql} />
                                <p>Sql</p>
                            </a>
                            <a
                                href="https://docs.angularjs.org/guide"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="angularjs" src={angularjs} />
                                <p>Angular.Js</p>
                            </a>
                            <a
                                href="https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="azure" src={azure} />
                                <p>Azure Dev Ops</p>
                            </a>
                            <a
                                href="https://docs.github.com/pt/rest/about-the-rest-api/about-the-rest-api?apiVersion=2022-11-28"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="apiRest" src={apiRest} />
                                <p>ApiRest</p>
                            </a>
                            <a
                                href="https://nextjs.org/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="nextjs" src={nextjs} />
                                <p>Next.Js</p>
                            </a>
                            <a
                                href="https://www.postgresql.org/docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="postegressql" src={postegressql} />
                                <p>PostegresSql</p>
                            </a>
                            <a
                                href="https://docs.kernel.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt="linux" src={linux} />
                                <p>Linux</p>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </Container>
    );
}

export default Homepage;
