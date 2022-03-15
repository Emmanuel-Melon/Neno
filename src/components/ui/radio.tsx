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
        borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
        border="border.secondary"
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
