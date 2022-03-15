import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

type ButtonProps = {
  size?: string;
  onClick?: (e?: any) => void;
  fullWidth?: boolean;
  icon?: any;
  color?: string;
  bg?: string;
  loadingText?: string;
  isLoading?: boolean;
};

export const CustomButton: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  bg,
  color,
  isLoading = false,
  loadingText,
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="brand"
      isLoading={isLoading}
      loadingText={loadingText || "loading"}
      style={{
        boxShadow: "brand.shadow",
      }}
      bg={bg || "brand.white"}
      color={color || "brand.primary"}
      size="lg"
      leftIcon={icon}
      _hover={{
        background: "brand.primary",
        color: "brand.white",
        border: "brand.border.50",
      }}
      borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
      border="3px groove #333333"
      _before={{
        content: '""',
        border: "3px groove",
        borderColor: "brand.secondary",
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate3d(-50%, -50%, 0) scale(1.025) rotate(1deg)",
        borderRadius: "1% 1% 2% 4% / 2% 6% 5% 4%",
      }}
    >
      {children}
    </Button>
  );
};
