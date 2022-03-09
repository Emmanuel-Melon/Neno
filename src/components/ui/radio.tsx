import { useRadio, Box } from "@chakra-ui/react";

export const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        border="none"
        color="#fff"
        _hover={{
          bg: "rgba(0, 68, 69, 0.8)",
        }}
        _checked={{
          bg: "rgba(0, 68, 69, 0.4)",
          color: "#B7E778",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
