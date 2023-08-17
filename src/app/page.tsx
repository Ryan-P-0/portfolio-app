'use client'

import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main">
      <Text as="h1" fontSize="3.5em" fontWeight="500" my={5}>Ryan P: Experienced React Developer</Text>
      <Box>
        <Text my={5}>I have experience in React development, including: ...</Text>
        <Text my={5}>In addition to my React development knowledge, I also possess a familiarity with WordPress development.</Text>
      </Box>
      <Flex>
        <Box>
          <Text>React icon with skills breakdown</Text>
        </Box>
        <Box>
          <Text>WordPress icon with skills breakdown</Text>
        </Box>
      </Flex>
    </Box>
  )
}
