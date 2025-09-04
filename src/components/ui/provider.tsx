import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.800",
      },
    },
  },
});

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ChakraProvider>
  );
}
