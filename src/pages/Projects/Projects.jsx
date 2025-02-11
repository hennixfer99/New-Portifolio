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
                        description="Foi um projeto individual onde fiz meus primeiros testes de
    conhecimento em react, o objetivo era fazer um site onde o usuário pode
    se cadastrar e salvar as tecnologias listadas por ele em níveis de
    dificuldade."
                        tecnologies="React.js | Toasty.fy | API"
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
                        description="Projeto simulando um E-commerce aonde comecei a praticar Redux e Thunk durante a execução."
                        tecnologies="React.js, Redux, Thunk"
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
                        description="Foi um projeto individual onde fiz a criação do jogo torre de Hanoi com 3
    dificuldades diferentes e design responsivo."
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
                        description="Foi um projeto realizado em grupo onde gostaríamos que amantes de
    plantas se adicionassem para que pudessem fazer trocas de mudas, saber
    mais sobre como zelar de suas plantas e pudessem se sentir confortáveis
    com o minimalismo nas páginas."
                        tecnologies="React.js | Fake Api | Scrum | Styled-components | Node.Js "
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
                        description="Foi um projeto realizado em grupo onde criamos uma Api para coleta de lixo reciclavel
     aonde uma empresa pode indicar o material que deseja coletar e o usuário pode marcar pontos de coleta"
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
                        description="Projeto feito para fixação e aprendizado de testes feitos com djangorestframework"
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
