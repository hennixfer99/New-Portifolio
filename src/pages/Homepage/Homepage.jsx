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

    const tecnologias = [
        {
            nome: "HTML",
            img: html,
            alt: "HTML 5",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        },
        {
            nome: "JavaScript",
            img: js,
            alt: "js",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        },
        {
            nome: "CSS",
            img: css,
            alt: "css",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        },
        {
            nome: "GIT",
            img: git,
            alt: "git",
            link: "https://git-scm.com/docs/git",
        },
        {
            nome: "React",
            img: react,
            alt: "react",
            link: "https://react.dev/learn",
        },
        {
            nome: "TypeScript",
            img: ts,
            alt: "ts",
            link: "https://www.typescriptlang.org/docs/",
        },
        {
            nome: "Fígma",
            img: figma,
            alt: "figma",
            link: "https://help.figma.com/hc/en-us/categories/360002042553",
        },
        {
            nome: "Beekeeper",
            img: beekeeper,
            alt: "beekeeper",
            link: "https://docs.beekeeperstudio.io/",
        },
        {
            nome: "Node.Js",
            img: node,
            alt: "node.js",
            link: "https://nodejs.org/docs/latest/api/",
        },
        {
            nome: "Python",
            img: python,
            alt: "python",
            link: "https://docs.python.org/3/",
        },
        {
            nome: "Express",
            img: express,
            alt: "express",
            link: "https://expressjs.com/pt-br/",
        },
        {
            nome: "Sql",
            img: sql,
            alt: "sql",
            link: "https://www.w3schools.com/sql/",
        },
        {
            nome: "Angular.Js",
            img: angularjs,
            alt: "angularjs",
            link: "https://docs.angularjs.org/guide",
        },
        {
            nome: "Azure DevOps",
            img: azure,
            alt: "azure",
            link: "https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops",
        },
        {
            nome: "ApiRest",
            img: apiRest,
            alt: "apiRest",
            link: "https://docs.github.com/pt/rest/about-the-rest-api/about-the-rest-api?apiVersion=2022-11-28",
        },
        {
            nome: "Next.Js",
            img: nextjs,
            alt: "nextjs",
            link: "https://nextjs.org/docs",
        },
        {
            nome: "PostegresSql",
            img: postegressql,
            alt: "postegressql",
            link: "https://www.postgresql.org/docs/",
        },
        {
            nome: "Linux",
            img: linux,
            alt: "linux",
            link: "https://docs.kernel.org/",
        },
    ];

    return (
        <Container>
            <Particle />
            <div className="modal">
                <div className="first-block">
                    <section className="aboutMe">
                        <h2>Sobre mim </h2>
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

                    <section className="me">
                        <img
                            src={Rick}
                            alt="Uma imagem minha encima do prédio da Oracle em uma visita técnica junto a Faculdade"
                            className="personal-img"
                        />
                        <h2>Henrique Ferreira Mendes</h2>
                    </section>
                </div>
                <section className="skills">
                    <h2>Competências:</h2>
                    
                    <div className="tecnologies">
                        {tecnologias.map((tech, index) => (
                            <a
                                key={index}
                                href={tech.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt={tech.alt} src={tech.img} />
                                <p>{tech.nome}</p>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </Container>
    );
}

export default Homepage;
