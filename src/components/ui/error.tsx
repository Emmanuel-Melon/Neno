import { Avatar, Flex, Box, Text, Heading } from "@chakra-ui/react";

type ErrorProps = {
  errorMessage?: string;
  heading?: string;
};

export const ErrorComponent = ({ heading, errorMessage }: ErrorProps) => {
  return (
    <Flex direction="column" alignItems="center" gap={6}>
      <Box>
        <Avatar
          src="/images/flame-artificial-intelligence-1.svg"
          width="150"
          height="150"
          border="solid 5px rgba(240,246,238,1)"
        />
      </Box>
      <Heading as="h3" color="brand.primary" size="md">
        {heading}
      </Heading>
      <Text color="brand.secondary">{errorMessage}</Text>
    </Flex>
  );
};
