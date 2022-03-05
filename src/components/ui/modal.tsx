import React, { useState, useEffect, FunctionComponent } from "react";
import  styled from  'styled-components';
import Modal from 'react-modal';

const Wrapper = styled.div`
  border: none;
`;


Modal.setAppElement("#__next");

type ModalProps = {
  show: boolean;
  children: any;
  close: any;
}

export const CustomModal: FunctionComponent<ModalProps> = ({show, close, children }: ModalProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Tracks mouse position
  useEffect(() => {
    const setFromEvent = (e: { clientX: any; clientY: any; }) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("click", setFromEvent);

    return () => {
      window.removeEventListener("click", setFromEvent);
    };
  }, []);

  const customStyles = {
  content : {
    background: "#fff",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: "fit-content",
    padding: 0,
    borderRadius: "1rem",
    border: "none",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  },
  overlay: {
    background: "rgba(251, 128, 156, 0.3)"
  }
};
  return (
    <Wrapper>
      <Modal
        isOpen={show}
        onRequestClose={close}
        style={customStyles}
      >
        {children}   
      </Modal>
    </Wrapper>
  )
}