import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

type ButtonProps = {
  size?: string;
  onClick?: (e?: any) => void;
  fullWidth?: boolean;
  icon?: any;
};

export const CustomButton: FC<ButtonProps> = ({ children, onClick, icon }) => {
  return (
    <Button
      onClick={onClick}
      variant="solid"
      color="#D1F5D3"
      bg="rgba(25, 41, 101, 0.4)"
      size="lg"
      outline={0}
      leftIcon={icon}
      _hover={{
        background: "#192965",
      }}
    >
      {children}
    </Button>
  );
};
