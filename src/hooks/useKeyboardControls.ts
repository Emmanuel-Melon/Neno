import { useEffect } from "react";

interface PropsType {
  handleArrowUp?: () => void;
  handleArrowDown?: () => void;
  handleEscape?: () => void;
  handleReturn?: () => void;
}

export const useKeyboardControls = ({
  handleArrowDown,
  handleArrowUp,
  handleEscape,
  handleReturn,
}: PropsType) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowDown":
          handleArrowDown && handleArrowDown();
          break;
        case "ArrowUp":
          handleArrowUp && handleArrowUp();
          break;
        case "Enter":
          handleReturn && handleReturn();
        case "Escape":
          handleEscape && handleEscape();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleArrowDown, handleArrowUp, handleEscape, handleReturn]);
};
