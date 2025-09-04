import { Box, VStack, Text } from "@chakra-ui/react";
import { CustomCheckbox } from "../ui/CustomCheckbox";

interface FilterSectionProps<T extends string = string> {
  title: string;
  options: readonly T[];
  selectedOptions: T[];
  onToggle: (option: T) => void;
}

export const FilterSection = <T extends string = string>({
  title,
  options,
  selectedOptions,
  onToggle,
}: FilterSectionProps<T>) => {
  return (
    <Box>
      <Text fontSize="1.6rem" fontWeight="700" color="#3F3F3F" mb={"20px"}>
        {title}
      </Text>

      <VStack spacing={3} align="stretch" mb={6}>
        {options.map((option) => (
          <CustomCheckbox
            key={option}
            label={option}
            isChecked={selectedOptions.includes(option)}
            onChange={() => onToggle(option)}
          />
        ))}
      </VStack>
    </Box>
  );
};
