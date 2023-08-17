'use client'

import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import CardComponent from "@/components/CardComponent";

export default function Projects() {
  const cardDimensions = ["379px", "379px"];

    return (
      <Box as="main" m={5}>
        <Text as="h1" fontSize="3.5em" fontWeight="500" my={5}>Projects</Text>
        <Wrap spacing="30px">
          <WrapItem>
            <CardComponent title="LoadLink" href="/projects/loadlink/" w={cardDimensions[0]} h={cardDimensions[1]} />
          </WrapItem>
        </Wrap>
      </Box>
    )
  }
  