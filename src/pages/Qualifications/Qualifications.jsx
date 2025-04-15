import Container from "./Styled";
import Particle from "../../Components/Particles/Particles";
import Carousel, { CarouselItem } from "../../Components/Carousel/Carousel";
import React, { useEffect, useState } from "react";
import kenzieFront from "../../imgs/kenzie1.png";
import kenzieFullStack from "../../imgs/kenzieFullStack.png";
import googleAIEssentials from "../../imgs/googleAIEssentials.png";
import DiplomModal from "../../Components/Diploms/Modal";
import networkDefense from "../../imgs/networkDefense.png";

function Qualifications({ children }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [diplomImg, setDiplomImg] = useState("");
    const [description, setDescription] = useState("");
    const breakpoint = 725;

    useEffect(() => {
        const windowSize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", windowSize);
        return () => {
            window.removeEventListener("resize", windowSize);
        };
    }, []);

    return (
        <Container>
            <Particle />
            <div className="Modal">
                {width > breakpoint ? (
                    <Carousel>
                        <CarouselItem>
                            <img
                                alt="Kenzie Academy Brasil front-end certificate"
                                src={kenzieFront}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                alt="Kenzie Academy Brasil full-stack certificate"
                                src={kenzieFullStack}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                alt="Google AI Essentials certificate"
                                src={googleAIEssentials}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                alt="Cisco Network Defense certificate"
                                src={networkDefense}
                            />
                        </CarouselItem>
                    </Carousel>
                ) : (
                    <>
                        <div className="cards">
                            <h2>Diplomas adquiridos</h2>

                            <button
                                className="modalOpen"
                                onClick={() => {
                                    setModalOpen(true);
                                    setTitle("Kenzie Front-End");
                                    setDiplomImg(kenzieFront);
                                    setDescription(
                                        "Diploma de conclusão de módulos Front-End da Kenzie Academy Brasil com duração de 1000 horas"
                                    );
                                }}
                            >
                                Kenzie Front-End
                            </button>

                            <button
                                className="modalOpen"
                                onClick={() => {
                                    setModalOpen(true);
                                    setTitle("Kenzie Full-stack");
                                    setDiplomImg(kenzieFullStack);
                                    setDescription(
                                        "Diploma de conclusão de curso da Kenzie Academy Brasil com duração de 2000 horas"
                                    );
                                }}
                            >
                                Kenzie Full-stack
                            </button>

                            <button
                                className="modalOpen"
                                onClick={() => {
                                    setModalOpen(true);
                                    setTitle("Google AI Essentials");
                                    setDiplomImg(googleAIEssentials);
                                    setDescription(
                                        "Diploma de conclusão de curso no Coursera"
                                    );
                                }}
                            >
                                Google AI Essentials
                            </button>
                        </div>
                        <DiplomModal
                            title={title}
                            modalOpen={modalOpen}
                            setModalOpen={setModalOpen}
                            alt={title}
                            img={diplomImg}
                            description={description}
                        />
                    </>
                )}
            </div>
        </Container>
    );
}

export default Qualifications;
