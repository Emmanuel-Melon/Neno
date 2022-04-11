import React, { ReactChild } from "react";
import { Flex } from "@chakra-ui/react";

type CardProps = {
  children: ReactChild | ReactChild[];
  width?: string | string[];
  padding?: string;
};

export const Card = ({ 
  children,
  width = "fit-content",
  padding
}: CardProps) => {
  return (
    <Flex
      direction="column"
      p={padding || "8"}
      alignItems="center"
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      bg="linear-gradient( 174.2deg,  #f0f0f0 7.1%, #F7F7F7 67.4% )"
      width={width}
      height="fit-content"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      borderTop="border.top"
    >
      {children}
    </Flex>
  );
};
