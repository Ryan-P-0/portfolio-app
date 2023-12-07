'use client'

import { Box, Text, Wrap } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";

export default function Projects() {
  return (
    <Box as="main" minH="100vh" p={4}>
      <Box m={{ base: 0, sm: 5 }}>
        <Text as="h1" fontSize={{ base: "2.5em", sm: "3.5em" }} fontWeight={800} my={5}>Projects</Text>
        <Wrap spacing="30px">
          <CardComponent 
            title="LoadLink" 
            description="A React and WordPress Headless CMS web application for a nation-wide transport company."
            linkHref="/projects/loadlink" 
            imgSrc="loadlink-app.png"
          />
        </Wrap>
      </Box>
    </Box>
  )
}