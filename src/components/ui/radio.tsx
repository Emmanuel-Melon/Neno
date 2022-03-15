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
        borderRadius="2% 6% 5% 4% / 1% 1% 2% 4%"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        color="brand.accent"
        _hover={{
          bg: "brand.accent",
          color: "brand.white",
        }}
        _checked={{
          bg: "brand.secondary",
          color: "brand.white",
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
