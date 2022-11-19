import { Container, Modal } from "./Styled";
import { useRef } from "react";

function NewModal({
  title,
  description,
  tecnologies,
  modalOpen,
  setModalOpen,
}) {
  const modalPrimaryButtonRef = useRef();
  const modalCloseButtonRef = useRef();

  return (
    <Container>
      <div>
        {modalOpen && (
          <Modal
            modalOpen ={modalOpen}
            closeButtonRef={modalCloseButtonRef}
            primaryButtonRef={modalPrimaryButtonRef}
            size="small"
            className="modal"
          >
            <header>
              <h2>{title}</h2>
              <button onClick={() => setModalOpen(false)}>x</button>
            </header>
            <main>
              <p>{description}</p>
              <h4>{tecnologies}</h4>
            </main>
          </Modal>
        )}
      </div>
    </Container>
  );
}

export default NewModal;
