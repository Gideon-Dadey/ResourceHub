import { Box, Flex, Text, VisuallyHidden } from "@chakra-ui/react";
import { useState } from "react";

interface CustomCheckboxProps {
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

export const CustomCheckbox = ({
  isChecked,
  onChange,
  label,
}: CustomCheckboxProps) => {
  const [, setIsHovered] = useState(false);

  return (
    <Flex
      as="label"
      alignItems="center"
      cursor="pointer"
      userSelect="none"
      role="checkbox"
      aria-checked={isChecked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      my={1.5}
      position="relative"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange();
        }
      }}
    >
      <VisuallyHidden>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
      </VisuallyHidden>
      <Box
        width="16.5px"
        height="16.5px"
        border="1px solid"
        borderColor={"#E0E0E0"}
        backgroundColor="transparent"
        mr={3}
        transition="all 0.2s ease"
        borderRadius="2px"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="1px"
        onClick={(e) => {
          e.preventDefault();
          onChange();
        }}
      >
        {isChecked && (
          <Box width="100%" height="100%" bg="#3F3F3F" borderRadius={"1px"} />
        )}
      </Box>
      <Text fontSize="1.6rem" color="#3F3F3F" fontWeight="500">
        {label}
      </Text>
    </Flex>
  );
};
