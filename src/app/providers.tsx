// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// bg="purple.900" etc.
const theme = extendTheme({
  colors: {
    tyrianPurple: {
      100: "#fff5f9",
      500: "#b80049",
    },
    tyrianRed: {
      500: "#990024",
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