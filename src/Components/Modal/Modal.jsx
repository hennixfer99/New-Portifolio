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
  code
}) {
  const modalPrimaryButtonRef = useRef();
  const modalCloseButtonRef = useRef();

  function close(){
    setModalOpen(false)
    setProjectNumber(0)
  }

  return (
    <>
    {modalOpen && 
    (
    <Container>
      <div>
          <Modal
            modalOpen = {modalOpen}
            closeButtonRef={modalCloseButtonRef}
            primaryButtonRef={modalPrimaryButtonRef}
            size="small"
            className="modal"
          >
            <header>
              <h2>{title}</h2>
              <button onClick={() => close()}>x</button>
            </header>
            <main>
              <div className="img"><img src={img} alt="project" /></div>
              <p>{description}</p>
              <div className="square2">
              <div className="tec">
              <h4>Teconologias Utilizadas:</h4>
              <h5>{tecnologies}</h5>
              </div>
              <div className="project">
                <button onClick={vercel}>Deploy</button>
                <button onClick={code}>Repositório</button>
              </div>
              </div>
            </main>
          </Modal>
      </div>
    </Container>
    )}
    </>
  );
}

export default NewModal;
