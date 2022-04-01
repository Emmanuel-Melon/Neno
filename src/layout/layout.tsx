import React, { ReactChild } from "react";
import { Box, Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactChild | ReactChild[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      width="100%"
      height="100%"
      minHeight="100vh"
      alignItems="center"
      margin={0}
      style={{
        backgroundImage: 'url("/images/Cloudy.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      p="8"
    >
      <Flex width="100%" height="100%" direction="column" alignItems="center">
        {children}
      </Flex>
    </Box>
  );
}
