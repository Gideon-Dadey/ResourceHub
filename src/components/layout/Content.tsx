import { Box } from "@chakra-ui/react";
import { FilterSidebar } from "./FilterSidebar";
import CardContent from "./CardContent";

const Content = () => {
  return (
    <Box
      maxWidth={"1400px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      padding={{ base: "2rem", md: "2rem" }}
    >
      <Box
        maxWidth={"1161px"}
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "0.5fr 1fr" }}
        gap="1rem"
        marginTop={"5rem"}
        width="100%"
      >
        <FilterSidebar />
        <CardContent />
      </Box>
    </Box>
  );
};

export default Content;
