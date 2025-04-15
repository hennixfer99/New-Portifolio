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

    const repositorios = [
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-hennixfer99",
        "https://github.com/hennixfer99/PokemonShop",
        "https://github.com/hennixfer99/torre-de-hanoi",
        "https://github.com/hennixfer99/M3-ProjetoCapstone--Alex-Grupo3",
        "https://github.com/vitorschmidt/Recikle",
        "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint5-komercio-hennixfer99",
    ];

    const deploys = [
        "https://react-entrega-s2-kenzie-hub-hennixfer99.vercel.app",
        "https://pokemon-shop-v2.vercel.app/",
        "https://hennixfer99.github.io/torre-de-hanoi/",
        "https://m3-projeto-capstone-alex-grupo3-paulo-david.vercel.app",
        "https://recikle-projeto.herokuapp.com/api/",
        "https://komercio-generic-view-henrique.herokuapp.com/api/",
    ];

    function abrirLink(tipo, index) {
        const url = tipo === "repo" ? repositorios[index] : deploys[index];
        return window.open(url);
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
                        description="Projeto individual no estilo mimic, desenvolvido como exercício introdutório em React. 
                        O objetivo foi aplicar os primeiros conceitos da biblioteca React seguindo um layout  pré-definidos no Figma. 
                        A aplicação permite que o usuário se cadastre, adicione tecnologias e categorize seu nível de conhecimento em cada uma delas. 
                        O projeto foi desenvolvido em uma semana."
                        tecnologies="React | Toasty.fy | API | JavaScript"
                        setProjectNumber={setProjectNumber}
                        img={kenzieHub}
                        vercel={() => abrirLink("deploy", 0)}
                        code={() => abrirLink("repo", 0)}
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
                        description="Projeto individual no estilo autoral, onde foi simulado um e-commerce. 
                        O tempo de produção foi de cinco dias e o processo teve início com a criação de um mockup simples. 
                        A partir disso, todo o código foi desenvolvido seguindo um estilo previamente definido. 
                        Durante a implementação, iniciei a prática com Redux e Thunk."
                        tecnologies="React | Redux | Thunk | JavaScript | Particles"
                        setProjectNumber={setProjectNumber}
                        img={pokemonShop}
                        vercel={() => abrirLink("deploy", 1)}
                        code={() => abrirLink("repo", 1)}
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
                        description="Projeto individual no estilo autoral, focado na criação do jogo Torre de Hanoi com três níveis de dificuldade. 
                        O tempo de produção foi de duas semanas, com o objetivo de praticar manipulação do DOM, aprimorar a linguagem JavaScript e trabalhar com design responsivo."
                        tecnologies="DOM | HTML | CSS | JavaScript"
                        setProjectNumber={setProjectNumber}
                        img={torre}
                        vercel={() => abrirLink("deploy", 2)}
                        code={() => abrirLink("repo", 2)}
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
                        description="Projeto em grupo no estilo autoral, desenvolvido como atividade de encerramento de módulo do curso, utilizando a metodologia ágil Scrum para organização. 
                        O design web e mobile foi criado no Figma, e uma fake API construída em Node.js foi responsável por armazenar os dados de plantas enviados ao site. 
                        A proposta da aplicação é oferecer um espaço para que amantes de plantas possam realizar trocas de mudas, aprender mais sobre cuidados com suas plantas e interagir em um ambiente minimalista e acolhedor. 
                        Atuei com foco principal no desenvolvimento da aplicação, assumindo a maior parte da carga de implementação."
                        tecnologies="React | Fake Api | Scrum | Styled-components | Node.Js | JavaScript "
                        setProjectNumber={setProjectNumber}
                        img={myPlant}
                        vercel={() => abrirLink("deploy", 3)}
                        code={() => abrirLink("repo", 3)}
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
                        description="Projeto em grupo no estilo autoral, desenvolvido como atividade de encerramento de módulo do curso, utilizando a metodologia ágil Scrum para organização e realização de dailys de alinhamento. 
                        O projeto foi estruturado com o uso de diagramas para facilitar o entendimento, além de Docker para a criação de containers. 
                        A proposta da aplicação é criar uma API que informa aos usuários os dias e horários da coleta de lixo reciclável, facilitando a vida de quem acabou de se mudar ou esqueceu os horários. 
                        Além disso, a API permite que empresas de coleta de lixo instalem rastreadores nos seus veículos, proporcionando maior comodidade ao usuário ao acompanhar os horários das coletas. Participei ativamente do desenvolvimento da API e na organização do fluxo de trabalho dentro do time."
                        tecnologies="Python | Django | Djangorestframework | Django Generic View | Docker | PostgresSQL"
                        setProjectNumber={setProjectNumber}
                        img={recikle}
                        // vercel={() => abrirLink("deploy", 4)}
                        code={() => abrirLink("repo", 4)}
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
                        description="Projeto no estilo mimic, desenvolvido com o objetivo de fixação e aprendizado de testes em Django. 
                        A aplicação foi construída utilizando Python, Django Rest Framework e PostgreSQL, focando na implementação de testes automatizados para garantir a qualidade e funcionamento da API."
                        tecnologies="Python | Django | Djangorestframework | PostgresSQL | Django Generic View"
                        setProjectNumber={setProjectNumber}
                        img={komercio}
                        // vercel={() => abrirLink("deploy", 5)}
                        code={() => abrirLink("repo", 5)}
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
