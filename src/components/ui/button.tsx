import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

type ButtonProps = {
  size?: string;
  onClick: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  icon?: any;
  color?: string;
  bg?: string;
  loadingText?: string;
  isLoading?: boolean;
  width?: string;
  disabled?: boolean;
  variant?: string;
};

export const CustomButton: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  bg,
  color,
  isLoading = false,
  loadingText,
  disabled = false,
  size = "lg",
  width,
  variant
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="brand"
      isLoading={isLoading}
      loadingText={loadingText || "loading"}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      px={5}
      width={width}
      py={3}
      variant={variant}
      outline="none"
      disabled={disabled}
      bg={bg || "brand.white"}
      color={color || "brand.primary"}
      size={size}
      leftIcon={icon}
      _hover={{
        background: "brand.accent",
        color: "brand.white",
      }}
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      border="border.primary"
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
        borderRadius: "4% 12% 10% 8% / 5% 5% 10% 8%",
      }}
      _focus={{
        outline: "none",
        boxShadow: "none"
      }}
    >
      {children}
    </Button>
  );
};
