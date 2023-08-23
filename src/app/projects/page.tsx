'use client'

import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";

export default function Projects() {
    return (
      <Box as="main" m={5}>
        <Text as="h1" fontSize="3.5em" fontWeight="500" my={5}>Projects</Text>
        <Wrap spacing="30px">
          <WrapItem>
            <CardComponent 
              title="LoadLink" 
              description="A React and Wordpress Headless CMS web application for a nation-wide transport company."
              linkHref="/projects/loadlink/" 
              imgSrc="loadlink-app.png"
            />
          </WrapItem>
        </Wrap>
      </Box>
    )
  }
  