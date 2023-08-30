'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import TechSkills from "@/components/TechSkills";

// Make LoadLink project page a re-usable project page component
// Fix sidebar logo not working in LoadLink project page
// Fix sidebar active/hover background color logic
// Add animations to projects cards
// Make site responsive

export default function Home() {
  return (
    <Box as="main">
      <Text as="h1" fontSize="3.5em" fontWeight="500" my={5}>Ryan P: Experienced React Developer</Text>
      <Box>
        <Text my={5}>I am a web developer and programmer with experience in React, including: functional components, React hooks, modern ES6+ JavaScript, TypeScript, Next.js framework, Jest unit testing, Cypress end-to-end testing, and more.</Text>
        <Text my={5}>I first got into programming when I was in school through basic HTML+CSS webpages, which naturally progressed to learning basic vanilla JavaScript code. I then moved on further into fundamental object-oriented programming concepts and picked up languages such as Java, C# and Python; my next step was to focus on web development since that is the most popular branch of programming and the most practical, and ever since then I have primarily focused on modern JavaScript frameworks: specifically React and Next.js.</Text>
        <Text my={5}>I have worked in a web development company on the Gold Coast as part of their dev team for over a year now. Since they use WordPress for their projects, I very quickly picked up and learnt WordPress - including custom WordPress development and PHP code - despite having no previous experience with it: proving that I am a capable and competent developer who is able to learn new concepts and technology quickly. I am confident in my abilities and I am always up for the challenge.</Text>
        <Text my={5}>I also have some knowledge of Python syntax since I like the language and its ease of use for the purposes of writing scripts etc.</Text>
        <Text fontWeight={700}>Below is a summary of my skillset:</Text>
      </Box>
      <Box px={250}>
        <Flex justifyContent="space-around">
          <TechSkills 
            tech="react" 
            skills={[
              "Headless CMS Development",
              "Functional Components",
              "React Hooks",
              "Modern ES6+ JavaScript",
              "TypeScript",
              "Next.js Framework",
              "Node.js",
              "React Bootstrap",
              "Chakra UI",
              "Jest Unit Testing",
              "Cypress End-to-End Testing",
            ]} 
          />
          <TechSkills 
            tech="wp" 
            skills={[
              "Custom Plugins and Themes Development",
              "Hooks and Filters",
              "WooCommerce",
              "Elementor",
              "Post Types and Meta Fields",
              "WP REST API",
              "WP Queries",
              "PHP Programming",
            ]} 
          />
        </Flex>
      </Box>
    </Box>
  )
}
