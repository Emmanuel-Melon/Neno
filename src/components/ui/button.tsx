import React, { FC } from "react";
import { Button, ScaleFade } from "@chakra-ui/react";

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
  width = "100%",
  variant,
}) => {
  return (
    <ScaleFade initialScale={0.1} in={true}>
      <Button
        onClick={onClick}
        colorScheme="brand"
        isLoading={isLoading}
        loadingText={loadingText || "loading"}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        px={5}
        width={width}
        py={3}
        variant={variant}
        outline="none"
        disabled={disabled}
        bg={bg || "brand.white"}
        color={color || "brand.secondary"}
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
          border: "3px solid",
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
          boxShadow: "none",
        }}
        justifyContent="flex-start"
      >
        {children}
      </Button>
    </ScaleFade>
  );
};
