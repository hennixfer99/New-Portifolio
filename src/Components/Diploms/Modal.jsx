import { Container, Modal } from "./Styled";
import { useRef } from "react";

function DiplomModal({
    title,
    modalOpen,
    setModalOpen,
    img,
    alt,
    description,
}) {
    const modalPrimaryButtonRef = useRef();
    const modalCloseButtonRef = useRef();

    function close() {
        setModalOpen(false);
    }

    return (
        <>
            {modalOpen && (
                <Container
                    className={modalOpen ? "active" : null}
                    onClick={() => close()}
                >
                    <Modal
                        modalOpen={modalOpen}
                        closeButtonRef={modalCloseButtonRef}
                        primaryButtonRef={modalPrimaryButtonRef}
                        size="small"
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header>
                            <h2>{title}</h2>
                            <button onClick={() => close()}>x</button>
                        </header>
                        <main>
                            <div className="img">
                                <img src={img} alt={alt} />
                            </div>
                            <p>{description}</p>
                        </main>
                    </Modal>
                </Container>
            )}
        </>
    );
}

export default DiplomModal;
