import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { useFilter } from "@/context";

const Herosection = () => {
  const { setSearchQuery, filterState } = useFilter();
  // did this font sizing across devices:
  const headerFontSize = useBreakpointValue({
    base: "3.2rem",
    sm: "3.6rem",
    md: "4.4rem",
    lg: "5.2rem",
    xl: "5.2rem",
  });

  const descriptionFontSize = useBreakpointValue({
    base: "1.6rem",
    sm: "1.8rem",
    md: "1.4rem",
    lg: "1.6rem",
    xl: "1.6rem",
  });

  const containerWidth = useBreakpointValue({
    base: "32rem",
    sm: "37.5rem",
    md: "60rem",
    lg: "70rem",
    xl: "85.3rem",
    "2xl": "85.3rem",
  });

  const containerHeight = useBreakpointValue({
    base: "28rem",
    sm: "32rem",
    md: "40rem",
    lg: "45rem",
    xl: "50rem",
    "2xl": "50rem",
  });

  const inputHeight = useBreakpointValue({
    base: "4rem",
    sm: "4.5rem",
    md: "4.5rem",
    lg: "5rem",
    xl: "5rem",
  });

  const inputFontSize = useBreakpointValue({
    base: "1.4rem",
    sm: "1.4rem",
    md: "1.5rem",
    lg: "1.6rem",
    xl: "1.6rem",
  });

  // Padding adjustments for input
  const inputPadding = useBreakpointValue({
    base: "1.5rem",
    sm: "1.8rem",
    md: "1.8rem",
    lg: "2rem",
    xl: "2rem",
  });

  const inputPaddingLeft = useBreakpointValue({
    base: "3.5rem",
    sm: "3.8rem",
    md: "3.8rem",
    lg: "4rem",
    xl: "4rem",
  });

  return (
    <Box
      backgroundColor="gray.100"
      height={containerHeight}
      display="flex"
      flexDirection="column"
      gap={{ base: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.3rem" }}
      alignItems="center"
      justifyContent="center"
      px={{ base: "2rem", sm: "3rem", md: "4rem", lg: "2rem" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{ base: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.3rem" }}
        maxWidth={containerWidth}
        alignItems="center"
        justifyContent="center"
        px={{ base: "1rem", sm: "2rem", md: "0" }}
      >
        <Text
          fontSize={headerFontSize}
          fontWeight="700"
          fontFamily={"Poppins"}
          textAlign="center"
          lineHeight={{ base: "1.1", md: "1.2" }}
        >
          Resources
        </Text>

        <Text
          fontSize={descriptionFontSize}
          textAlign={"center"}
          lineHeight={{ base: "1.4", md: "1.5", lg: "1.6" }}
          px={{ base: "1rem", sm: "2rem", md: "3rem", lg: "0" }}
        >
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue
        </Text>

        <Box width="100%" maxWidth={{ base: "100%", md: "50rem", lg: "60rem" }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              height="100%"
              paddingLeft={{ base: "0.8rem", md: "1rem" }}
            >
              <Image
                src="/assets/images/search.svg"
                alt="Search"
                width={{ base: "1.6rem", md: "2rem" }}
                height={{ base: "1.6rem", md: "2rem" }}
              />
            </InputLeftElement>
            <Input
              outline="none"
              focusBorderColor="#314EF9"
              padding={inputPadding}
              paddingLeft={inputPaddingLeft}
              placeholder="Search by title or keyword"
              fontSize={inputFontSize}
              height={inputHeight}
              borderColor={"#A1A1A1"}
              borderRadius={{ base: "0.6rem", md: "0.8rem" }}
              _hover={{ borderColor: "#314EF9" }}
              _placeholder={{
                fontSize: { base: "1.3rem", md: "1.4rem", lg: "1.5rem" },
              }}
              value={filterState.searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Herosection;
