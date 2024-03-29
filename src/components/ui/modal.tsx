import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactChild,
} from "react";
import Modal from "react-modal";
import { Flex } from "@chakra-ui/react";

Modal.setAppElement("#__next");

type ModalProps = {
  show: boolean;
  children: ReactChild | ReactChild[] | null;
  close: () => void;
};

export const CustomModal: FunctionComponent<ModalProps> = ({
  show,
  close,
  children,
}: ModalProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Tracks mouse position
  useEffect(() => {
    const setFromEvent = (e: { clientX: any; clientY: any }) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("click", setFromEvent);

    return () => {
      window.removeEventListener("click", setFromEvent);
    };
  }, []);

  const customStyles = {
    content: {
      background: "#041C32",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "fit-content",
      padding: 0,
      borderRadius: "4% 12% 10% 8% / 5% 5% 10% 8%",
      border: "none",
      outline: "0",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
    },
    overlay: {
      background: "rgba(187, 100, 100, 0.4)",
    },
  };
  return (
    <Flex>
      <Modal isOpen={show} onRequestClose={close} style={customStyles}>
        {children}
      </Modal>
    </Flex>
  );
};
