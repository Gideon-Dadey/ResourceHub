import {
  Box,
  VStack,
  Heading,
  Button,
  Text,
  Divider,
  Hide,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import { useFilter } from "@/context";
import { FilterSection } from "./FilterSection";
import {
  PRINCIPLES,
  DOCUMENT_TYPES,
  CATEGORIES,
} from "@/constants/filterConstants";

export const FilterSidebar = () => {
  const {
    filterState,
    clearAllFilters,
    hasActiveFilters,
    getActiveFilterCount,
    filteredResources,
    togglePrinciple,
    toggleDocumentType,
    toggleCategory,
  } = useFilter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="white"
        position={{ base: "relative", sm: "sticky" }}
        top={{ base: "0", sm: "24px" }}
        w="100%"
        maxW={{ base: "100%", sm: "280px" }}
      >
        <VStack spacing={6} align="stretch">
          <Hide above="sm">
            <Button
              onClick={onOpen}
              variant="ghost"
              justifyContent="center"
              h="auto"
              p={4}
              bg={"gray.50"}
              _hover={{ bg: "gray.100" }}
              _active={{ bg: "gray.200" }}
              transition="all 0.2s"
            >
              <VStack spacing={2}>
                <Box display="flex" alignItems="center" gap={3}>
                  <Image
                    src="/assets/images/filter.svg"
                    alt="Filter icon"
                    boxSize="18px"
                  />
                  <Text fontSize="1.4rem" fontWeight="700" color="gray.800">
                    Show Filters
                  </Text>
                </Box>
                {hasActiveFilters() && (
                  <Text fontSize="xl" color="blue.500" fontWeight="medium">
                    {getActiveFilterCount()} filter
                    {getActiveFilterCount() !== 1 ? "s" : ""} active
                  </Text>
                )}
              </VStack>
            </Button>
          </Hide>

          {/* hide below sm means it shows on iPad Mini, iPad Air, iPad Pro, and Desktop, got it */}
          <Hide below="sm">
            <Box>
              <Heading
                size="md"
                fontSize="1.6rem"
                fontWeight="700"
                color="gray.800"
                mb={4}
              >
                Filters
              </Heading>

              {hasActiveFilters() && (
                <Button
                  size="1rem"
                  variant="ghost"
                  colorScheme="blue"
                  onClick={clearAllFilters}
                  p={0}
                  h="auto"
                  fontWeight="normal"
                  mb={4}
                  _hover={{ textDecoration: "underline" }}
                >
                  Clear all ({getActiveFilterCount()})
                </Button>
              )}
            </Box>

            <Divider />

            <FilterSection
              title="Key Foundational Principles"
              options={PRINCIPLES}
              selectedOptions={filterState.principles}
              onToggle={togglePrinciple}
            />

            <FilterSection
              title="Document type"
              options={DOCUMENT_TYPES}
              selectedOptions={filterState.documentTypes}
              onToggle={toggleDocumentType}
            />

            <FilterSection
              title="Categories"
              options={CATEGORIES}
              selectedOptions={filterState.categories}
              onToggle={toggleCategory}
            />
          </Hide>
        </VStack>
      </Box>

      {/* mobile drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize="1.4rem" marginTop={2} marginRight={2} />

          <DrawerHeader pb={4}>
            <VStack spacing={4} align="stretch">
              <Flex justify="space-between" align="center" maxWidth={"20rem"}>
                <Text fontSize="1.4rem" fontWeight="bold" color="gray.800">
                  Filters
                </Text>
                {hasActiveFilters() && (
                  <Button
                    size="sm"
                    variant="ghost"
                    colorScheme="blue"
                    onClick={clearAllFilters}
                    fontSize="lg"
                  >
                    Clear all ({getActiveFilterCount()})
                  </Button>
                )}
              </Flex>
            </VStack>
          </DrawerHeader>

          <DrawerBody px={6}>
            <VStack spacing={6} align="stretch">
              <FilterSection
                title="Key Foundational Principles"
                options={PRINCIPLES}
                selectedOptions={filterState.principles}
                onToggle={togglePrinciple}
              />

              <FilterSection
                title="Document type"
                options={DOCUMENT_TYPES}
                selectedOptions={filterState.documentTypes}
                onToggle={toggleDocumentType}
              />

              <FilterSection
                title="Categories"
                options={CATEGORIES}
                selectedOptions={filterState.categories}
                onToggle={toggleCategory}
              />

              <Box pt={4} pb={8}>
                <Text fontSize="xl" color="gray.500" textAlign="center">
                  {filteredResources.length} result
                  {filteredResources.length !== 1 ? "s" : ""}
                </Text>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
