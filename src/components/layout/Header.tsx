import {
  Box,
  Flex,
  Text,
  Image,
  Switch,
  useBreakpointValue,
  Hide,
  Divider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "#", active: false },
  { label: "Resources", href: "#", active: true },
  { label: "Toolkit", href: "#", active: false },
];

const UserAvatar = ({ initials }: { initials: string }) => (
  <Box
    width="3.3rem"
    height="3.3rem"
    borderRadius="full"
    backgroundColor="#17E4A1"
    display="flex"
    alignItems="center"
    justifyContent="center"
    fontWeight="700"
    color="#000"
  >
    {initials}
  </Box>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headerHeight = useBreakpointValue({ base: "7.4rem", md: "7.66rem" });
  const paddingX = useBreakpointValue({ base: "2rem", md: "7rem" });

  const renderNavItem = (item: typeof NAV_ITEMS[number]) => (
    <Box
      as="a"
      key={item.label}
      href={item.href}
      fontSize="1.4rem"
      fontWeight="600"
      px="8px"
      height="100%"
      display="flex"
      alignItems="center"
      color={item.active ? "#314EF9" : "black"}
      position="relative"
      transition="color 0.3s ease"
      _hover={{
        color: "#314EF9",
        _after: { width: "100%" },
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-2px",
        left: "50%",
        transform: "translateX(-50%)",
        width: item.active ? "100%" : "0%",
        height: "4px",
        backgroundColor: "#314EF9",
        transition: "width 0.3s ease",
      }}
    >
      {item.label}
    </Box>
  );

  return (
    <>
      <Box
        as="header"
        aria-label="Main site header"
        width="100%"
        height={headerHeight}
        boxShadow="md"
        bg="white"
        fontFamily="Poppins"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="space-between"
          px={paddingX}
          maxWidth="1400px"
          mx="auto"
        >
          {/* Logo + desktop nav */}
          <Flex gap={{ base: "1rem", md: "4.65rem" }} alignItems="center">
            <Image src="/assets/images/logo.svg" alt="Site logo" />

            <Hide below="lg">
              <Flex gap="2rem" alignItems="center" height="100%">
                {NAV_ITEMS.map(renderNavItem)}
              </Flex>
            </Hide>
          </Flex>

          {/* Actions: switch, user, mobile menu */}
          <Flex gap="2rem" alignItems="center">
            <HStack spacing="1.4rem">
              <Switch
                size="lg"
                colorScheme="blue"
                aria-label="Toggle employee view"
                sx={{
                  "& .chakra-switch__track[data-checked]": {
                    backgroundColor: "#314EF9 !important",
                  },
                }}
              />
              <Hide below="lg">
                <Text fontSize="1.4rem" fontWeight="600">
                  Switch to Employee
                </Text>
              </Hide>
            </HStack>

            <Divider orientation="vertical" h="2.5rem" borderColor="gray.300" />

            <HStack spacing="1.4rem">
              <UserAvatar initials="JA" />
              <Hide below="lg">
                <HStack spacing="0.5rem">
                  <Text fontSize="1.4rem" fontWeight="600">
                    Dadey
                  </Text>
                  <Text fontSize="1.4rem" fontWeight="600" color="gray.500">
                    &#8964;
                  </Text>
                </HStack>
              </Hide>
            </HStack>

            <Hide above="lg">
              <Button
                onClick={onOpen}
                p={2}
                borderRadius="md"
                aria-label="Open menu"
                variant="ghost"
              >
                <Image
                  src="/assets/images/hamburger.svg"
                  alt="Open menu"
                  boxSize="24px"
                />
              </Button>
            </Hide>
          </Flex>
        </Flex>
      </Box>

      {/* Mobile navigation drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize="1.4rem" mt={2} mr={2} />

          <DrawerHeader pb={4}>
            <VStack spacing={4} align="stretch">
              <Text fontSize="1.4rem" fontWeight="bold">
                Menu
              </Text>
              <HStack spacing={3}>
                <UserAvatar initials="JA" />
                <VStack align="start" spacing={0}>
                  <Text fontSize="1.6rem" fontWeight="600">
                    Dadey
                  </Text>
                  <HStack spacing={2}>
                    <Switch
                      size="lg"
                      colorScheme="blue"
                      aria-label="Toggle employee view"
                      sx={{
                        "& .chakra-switch__track[data-checked]": {
                          backgroundColor: "#314EF9 !important",
                        },
                      }}
                    />
                    <Text fontSize="1.4rem" color="gray.600">
                      Employee View
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </DrawerHeader>

          <DrawerBody px={6}>
            <VStack spacing={6} align="stretch">
              <VStack spacing={4} align="stretch">
                <Text fontSize="1.6rem" fontWeight="semibold">
                  Navigation
                </Text>
                <VStack spacing={3} align="stretch">
                  {NAV_ITEMS.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      justifyContent="flex-start"
                      fontSize="1.4rem"
                      py={3}
                      h="auto"
                      color={item.active ? "#314EF9" : "inherit"}
                      borderLeft={item.active ? "3px solid #314EF9" : "none"}
                      bg={item.active ? "blue.50" : "transparent"}
                      _hover={{ bg: "gray.50" }}
                      onClick={onClose}
                    >
                      {item.label}
                    </Button>
                  ))}
                </VStack>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
