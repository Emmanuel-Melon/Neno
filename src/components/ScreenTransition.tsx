import {
  Box,
  Button,
  Center,
  VStack,
  keyframes,
  Flex,
  Fade,
} from "@chakra-ui/react";

const fade = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ScreenTransition = () => {
  const animation = `${fade} infinite 2s linear`;
  return (
    <Flex
      width="100%"
      height="100%"
      minHeight="100vh"
      flexGrow="1"
      animation={animation}
    ></Flex>
  );
};
