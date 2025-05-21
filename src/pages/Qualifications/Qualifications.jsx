import Container from "./Styled";
import Particle from "../../Components/Particles/Particles";
import Carousel from "../../Components/Carousel/Carousel";
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
    const diplomas = [
        {
            title: "Kenzie Front-End",
            img: kenzieFront,
            description:
                "Diploma de conclusão de módulos Front-End da Kenzie Academy Brasil com duração de 1000 horas",
        },
        {
            title: "Kenzie Full-stack",
            img: kenzieFullStack,
            description:
                "Diploma de conclusão de curso da Kenzie Academy Brasil com duração de 2000 horas",
        },
        {
            title: "Google AI Essentials",
            img: googleAIEssentials,
            description: "Diploma de conclusão de curso no Coursera",
        },
        {
            title: "Cisco Network Defense certificate",
            img: networkDefense,
            description:
                "Diploma de conclusão do curso de redes e dados da Cisco",
        },
    ];
    const images = [
        {
            img: kenzieFront,
            description:
                "Diploma de conclusão de módulos Front-End da Kenzie Academy Brasil com duração de 1000 horas",
        },
        {
            img: kenzieFullStack,
            description:
                "Diploma de conclusão de curso da Kenzie Academy Brasil com duração de 2000 horas",
        },
        {
            img: googleAIEssentials,
            description: "Diploma de conclusão de curso no Coursera",
        },
        {
            img: networkDefense,
            description:
                "Diploma de conclusão do curso de redes e dados da Cisco",
        },
    ];

    const handleOpenModal = (diploma) => {
        setModalOpen(true);
        setTitle(diploma.title);
        setDiplomImg(diploma.img);
        setDescription(diploma.description);
    };

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
                    <Carousel images={images} />
                ) : (
                    <>
                        <div className="cards">
                            <h2>Diplomas adquiridos</h2>

                            {diplomas.map((diploma, index) => (
                                <button
                                    key={index}
                                    className="modalOpen"
                                    onClick={() => handleOpenModal(diploma)}
                                >
                                    {diploma.title}
                                </button>
                            ))}
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
