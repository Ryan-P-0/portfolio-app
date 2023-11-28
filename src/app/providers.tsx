// app/providers.tsx
'use client'

import '@fontsource-variable/montserrat/wght.css'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// bg="customBlue.500" etc.
const theme = extendTheme({
  colors: {
    customBlue: {
      100: "#e3f1fd",
      500: "#0086ff",
    },
  },
  fonts: {
    heading: "'Montserrat Variable', sans-serif",
    body: "'Montserrat Variable', sans-serif",
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