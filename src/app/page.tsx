'use client'

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import TechSkills from "@/components/TechSkills";

export default function Home() {
  return (
    <Box as="main" m={5}>
      <Text as="h1" fontSize="3.5em" fontWeight="500" my={5}>Ryan P: Experienced React Developer</Text>
      <Box mb={100}>
        <Text my={5}>I'm a web developer with experience in React, including: functional components, hooks, modern ES6+ JavaScript, Jest unit testing, Cypress end-to-end testing, and more.</Text>
        <Text my={5}>In addition to my React development knowledge, I also possess familiarity with WordPress development.</Text>
        <Text fontWeight={700}>Below is a summary of my skillset:</Text>
      </Box>
      <Box px={250}>
        <Flex justifyContent="space-around">
          <TechSkills 
            tech="react" 
            skills={[
              "Headless CMS Development",
              "Functional Components",
              "Hooks",
              "Modern ES6+ JavaScript",
              "Jest Unit Testing",
              "Cypress End-to-End Testing",
            ]} 
          />
          <TechSkills 
            tech="wp" 
            skills={[
              "Plugin Development",
              "Theme Development",
              "Hooks and Filters",
              "WP Queries",
              "CRON Schedules",
              "PHP Programming",
              "MySQL Databases",
            ]} 
          />
        </Flex>
      </Box>
    </Box>
  )
}
