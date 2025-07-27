import { Container, Modal } from "./Styled";
import { useRef } from "react";

function NewModal({
    title,
    description,
    tecnologies,
    modalOpen,
    setModalOpen,
    setProjectNumber,
    img,
    vercel,
    code,
    alt,
}) {
    const modalPrimaryButtonRef = useRef();
    const modalCloseButtonRef = useRef();

    function close() {
        setModalOpen(false);
        setProjectNumber(0);
    }

    return (
        <>
            {modalOpen && (
                <Container onClick={() => close()}>
                    <Modal
                        modalOpen={modalOpen}
                        closeButtonRef={modalCloseButtonRef}
                        primaryButtonRef={modalPrimaryButtonRef}
                        size="small"
                        className="active"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header>
                            <h1>{title}</h1>
                            <button onClick={() => close()}>x</button>
                        </header>
                        <main>
                            <img src={img} alt={alt} />
                            <p>{description}</p>
                            <section className="square2">
                                <div className="tec">
                                    <h2>Teconologias Utilizadas:</h2>
                                    <p>{tecnologies}</p>
                                    <div className="buttons">
                                        <button onClick={code}>
                                            Repositório
                                        </button>
                                        {vercel && (
                                            <button onClick={vercel}>
                                                Deploy
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </main>
                    </Modal>
                </Container>
            )}
        </>
    );
}

export default NewModal;
