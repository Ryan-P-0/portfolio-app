'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import TechSkills from "@/components/TechSkills";

export default function Home() {
  return (
    <Box as="main" px={10}>
      <Text as="h1" fontSize="3.5em" fontWeight={700}>Experienced Web Developer</Text>
      <Text fontWeight={700} color="customBlue.500">Ryan Pittock</Text>
      <Box>
        <Text my={3} maxW="800px">I am an experienced web developer and programmer with a background in React and WordPress.</Text>
        <Text my={3} maxW="800px">I have worked in a web development company on the Gold Coast as part of their development team for over a year. Working with this company is what introduced me to WordPress development since they use it for their projects; I can prove to be highly adaptable and able to learn new concepts and technologies quickly, while I love to continually grow my skillset in this industry and increase the services I can provide to clients and businesses.</Text>
      </Box>
      <Box mt={100} mb={10}>
        <Text fontWeight={700} color="customBlue.500">Services I Provide</Text>
      </Box>
      <Box px={{ base: 0, xl: 250 }}>
        <Flex flexDirection={{ base: "column", xl: "row" }} justifyContent="space-around" gap={5}>
          <TechSkills 
            tech="react" 
            skills="Create custom functional components and hooks. Develop headless-CMS applications with WordPress. Make API calls using query libraries such as React Query. Implement custom HTML and CSS layouts and styling such as flexbox, grids, etc. as well as frameworks such as Bootstrap, Tailwind CSS, and Chakra UI. Develop with the Next.js framework and deploy on a Vercel server. Test applications with Cypress end-to-end testing and by creating unit tests."
          />
          <TechSkills 
            tech="wp" 
            skills="Develop numerous custom plugins and themes using PHP code. Effectively modify existing plugins/themes via hooks and filters. Create a WooCommerce ecommerce site for your business. Easily implement any web design into your site with Elementor page builder. Create custom post types and meta fields to define any kind of complex data for your website or application. Host and maintain your WordPress website including keeping plugins/themes and WordPress core up-to-date. Allow you to change your website's content at any time through the site dashboard."
          />
        </Flex>
      </Box>
    </Box>
  )
}
