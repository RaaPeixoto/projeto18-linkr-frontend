import { useState } from "react";
import styled from "styled-components";

export default function Modals() {
    const [modalIsOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false);
      }
    
  return (
    <ModalConteiner>
      <ModalP>
        Tem certeza que deseja assinar o plano Driven Plus {info.price}?
      </ModalP>
      <ModalButton>
        <button
          style={{ backgroundColor: "#CECECE" }}
          onClick={closeModal}
          type="button"
        >
          Não
        </button>
        <button onClick={fazerAssinatura} type="submit">
          Sim
        </button>
      </ModalButton>
    </ModalConteiner>
  );
}

`;
