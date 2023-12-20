// app/providers.tsx
"use client"

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// bg="customBlue.500" etc.
const theme = extendTheme({
  colors: {
    customBlue: {
      100: "#e3f1fd",
      500: "#0086ff",
    },
  },
});

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
    return (
      <CacheProvider>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    )
}