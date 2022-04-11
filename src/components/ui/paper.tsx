import { Box, ScaleFade } from "@chakra-ui/react";

type PaperProps = {
  width?: string | string[];
  height?: string | string[];
  children?: React.ReactChild | React.ReactChild[];
  display?: string | string[];
  bg?: string;
};

export const Paper = ({
  bg,
  children,
  width = "fit-content",
  height = "fit-content",
  display,
}: PaperProps) => {
  return (
    <Box
      width={width}
      height="fit-content"
      maxHeight={height}
      display={display}
      py="4"
      px="4"
      bg={bg || "brand.grey"}
      border="border.secondary"
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
    >
      {children}
    </Box>
  );
};
