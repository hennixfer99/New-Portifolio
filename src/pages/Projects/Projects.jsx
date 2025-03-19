import Container from "./Styled";
import Particle from "../../Components/Particles/Particles";
import { useState } from "react";
import NewModal from "../../Components/Modal/Modal.jsx";
import kenzieHub from "../../imgs/kenzieHub.png";
import myPlant from "../../imgs/myPlant.png";
import torre from "../../imgs/torre.png";
import pokemonShop from "../../imgs/pokemonShop.png";
import recikle from "../../imgs/recikle.png";
import komercio from "../../imgs/komercio.png";

function Projects() {
    const [modalOpen, setModalOpen] = useState(false);

    const [projectNumber, setProjectNumber] = useState(0);

    function git1() {
        const redirect = window.open(
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-hennixfer99"
        );
        return redirect;
    }
    function git2() {
        const redirect = window.open(
            "https://github.com/hennixfer99/PokemonShop"
        );
        return redirect;
    }
    function git3() {
        const redirect = window.open(
            "https://github.com/hennixfer99/torre-de-hanoi"
        );
        return redirect;
    }
    function git4() {
        const redirect = window.open(
            "https://github.com/hennixfer99/M3-ProjetoCapstone--Alex-Grupo3"
        );
        return redirect;
    }
    function git5() {
        const redirect = window.open("https://github.com/vitorschmidt/Recikle");
        return redirect;
    }
    function git6() {
        const redirect = window.open(
            "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint5-komercio-hennixfer99"
        );
        return redirect;
    }
    function project1() {
        const redirect = window.open(
            "https://react-entrega-s2-kenzie-hub-hennixfer99.vercel.app"
        );
        return redirect;
    }
    function project2() {
        const redirect = window.open("https://pokemon-shop-v2.vercel.app/");
        return redirect;
    }
    function project3() {
        const redirect = window.open(
            "https://hennixfer99.github.io/torre-de-hanoi/"
        );
        return redirect;
    }
    function project4() {
        const redirect = window.open(
            "https://m3-projeto-capstone-alex-grupo3-paulo-david.vercel.app"
        );
        return redirect;
    }
    function project5() {
        const redirect = window.open(
            "https://recikle-projeto.herokuapp.com/api/"
        );
        return redirect;
    }
    function project6() {
        const redirect = window.open(
            "https://komercio-generic-view-henrique.herokuapp.com/api/"
        );
        return redirect;
    }

    function modalName(nome) {
        setProjectNumber(nome);
        setModalOpen(true);
    }

    return (
        <Container>
            <Particle />
            <div className="Modal">
                <div className="cards">
                    <h2>Projetos de Front-end</h2>

                    <button className="modalOpen" onClick={() => modalName(1)}>
                        Kenzie hub
                    </button>

                    <button className="modalOpen" onClick={() => modalName(2)}>
                        Pokemon Shop
                    </button>

                    <button className="modalOpen" onClick={() => modalName(3)}>
                        Torre de Hanoi
                    </button>

                    <button className="modalOpen" onClick={() => modalName(4)}>
                        My Plant
                    </button>
                </div>
                <div className="cards">
                    <h2>Projetos de Back-end</h2>
                    <button className="modalOpen" onClick={() => modalName(5)}>
                        Recikle
                    </button>
                    <button className="modalOpen" onClick={() => modalName(6)}>
                        Komercio
                    </button>
                </div>

                {projectNumber === 1 ? (
                    <NewModal
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                        title="Kenzie hub"
                        description="Foi um projeto individual mimic onde fiz meus primeiros testes de
    conhecimento em react, o objetivo era fazer o uso da lib React pela primeira vez, seguir um fígma e o tempo de produção foi de 1 semana, o usuário pode
    se cadastrar e salvar as tecnologias listadas por ele em níveis de dificuldade."
                        tecnologies="React | Toasty.fy | API | JavaScript"
                        setProjectNumber={setProjectNumber}
                        img={kenzieHub}
                        vercel={project1}
                        code={git1}
                        alt={"Projeto Kenzie hub"}
                    />
                ) : (
                    <></>
                )}

                {projectNumber === 2 ? (
                    <NewModal
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                        title="Pokemon Shop"
                        description="Projeto individual autoral aonde simulo um E-commerce, o tempo de produção foi de 5 dias e o processo começou comigo 
                        montando um pequeno mockup após a montagem todo o código foi feito seguindo o estilo pré-definido, neste projeto comecei a praticar 
                        Redux e Thunk durante a execução."
                        tecnologies="React | Redux | Thunk | JavaScript | Particles"
                        setProjectNumber={setProjectNumber}
                        img={pokemonShop}
                        vercel={project2}
                        code={git2}
                        alt={"Projeto Pokemon Shop"}
                    />
                ) : (
                    <></>
                )}
                {projectNumber === 3 ? (
                    <NewModal
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                        title="Torre de Hanoi"
                        description="Foi um projeto individual autoral onde fiz a criação do jogo torre de Hanoi com 3 
                        dificuldades diferentes, o tempo de produção foi de 2 semanas e o objetivo foi a prática 
                        de DOM, aprimoramento da linguagem JavaScript e do design responsivo."
                        tecnologies="DOM | HTML | CSS | JS"
                        setProjectNumber={setProjectNumber}
                        img={torre}
                        vercel={project3}
                        code={git3}
                        alt={"Projeto Torre de Hanoi"}
                    />
                ) : (
                    <></>
                )}
                {projectNumber === 4 ? (
                    <NewModal
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                        title="My Plant"
                        description="Foi um projeto autoral realizado em grupo utilizando a metodologia ágil SCRUM para organização, 
                        design web e mobile construídos no Fígma e uma Fake API feita em Node.js aonde armazenamos os dados de plantas que são enviados ao nosso site,
                        o projeto foi criado com o intuito de realizar uma tarefa de fim de módulo do nosso curso de programação e a ideia é um site onde gostaríamos 
                        que amantes de plantas se adicionassem para que pudessem fazer trocas de mudas, saber mais sobre como zelar de suas plantas e pudessem se sentir confortáveis
                        com o minimalismo nas páginas."
                        tecnologies="React | Fake Api | Scrum | Styled-components | Node.Js | JavaScript "
                        setProjectNumber={setProjectNumber}
                        img={myPlant}
                        vercel={project4}
                        code={git4}
                        alt={"Projeto My plant"}
                    />
                ) : (
                    <></>
                )}
                {projectNumber === 5 ? (
                    <NewModal
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                        title="Recikle"
                        description="Foi um projeto autoral em grupo utilizando a metodologia ágil SCRUM para organização, diagramas para fácil entendimento, docker para criação de containers e
                        realizamos dailys regularmente para fazer alinhamentos e nos ajudar com o planejamento geral, o projeto foi criado com o intuito de realizar uma tarefa de fim de módulo 
                        do nosso curso de programação e a ideia é criar uma API aonde informaremos para o usuário quando e onde acontece a coleta de lixo reciclavel assim facilitando a vida de um usuário 
                        que acabou de se mudar ou que se esqueceu dos dias aonde ocorre a passagem do caminhão, não só isso mas também ter contato com empresas aonde as mesmas podem deixar rastreadores nos seus veículos 
                        para que o usuário tenha a facilidade e comodidade de ver o horário que ocorrerá as coletas"
                        tecnologies="Python | Django | Djangorestframework | Django Generic View | Docker | PostgresSQL"
                        setProjectNumber={setProjectNumber}
                        img={recikle}
                        vercel={project5}
                        code={git5}
                        alt={"Projeto Recikle"}
                    />
                ) : (
                    <></>
                )}
                {projectNumber === 6 ? (
                    <NewModal
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                        title="Komercio"
                        description="Projeto mimic feito para fixação e aprendizado de testes feitos em Django utilizando Python, RestFramework e PostgresSql para sua construção"
                        tecnologies="Python | Django | Djangorestframework | PostgresSQL | Django Generic View"
                        setProjectNumber={setProjectNumber}
                        img={komercio}
                        vercel={project6}
                        code={git6}
                        alt={"Projeto Komercio"}
                    />
                ) : (
                    <></>
                )}
            </div>
        </Container>
    );
}

export default Projects;
