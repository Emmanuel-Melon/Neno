import { Box } from "@chakra-ui/react";

type PaperProps = {
  width?: string;
  height?: string;
  children?: React.ReactChild | React.ReactChild[];
};

export const Paper = ({
  children,
  width = "fit-content",
  height = "fit-content",
}: PaperProps) => {
  return (
    <Box
      width={width}
      height="fit-content"
      maxHeight={height}
      p="8"
      bg="brand.grey"
      border="border.primary"
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      {children}
    </Box>
  );
};
