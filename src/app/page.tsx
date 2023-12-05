'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import { FaLinkedin, FaArrowDown } from "react-icons/fa";
import TechSkills from "@/components/TechSkills";
import Link from "next/link";
import "./custom.css";

export default function Home() {
  return (
    <>
      <Box as="section" minH="100vh" p={10} pos="relative" backgroundImage="url('/portfolio-app/bg-white.jpg')" backgroundSize="cover" backgroundRepeat="no-repeat">
        <Box px={10}>
          <Box as="header">
            <Text as="h1" fontSize={{ base: "1.5em", sm: "3em", md: "3.5em" }} fontWeight={800}>Experienced Web Developer</Text>
            <Text fontWeight={800} color="customBlue.500">Ryan Pittock</Text>
          </Box>
          <Box as="main">
            <Text my={5} maxW="800px" fontWeight={500}>I am an experienced web developer and programmer with a background in React and WordPress.</Text>
            <Text my={5} maxW="800px" fontWeight={500}>I have industry experience working in a web development company on the Gold Coast as part of their development team. Working with this company is what first introduced me to WordPress development since they use it for their projects.</Text>
            <Text my={5} maxW="800px" fontWeight={500}>Due to my particular background in web development: the services I provide to clients are mostly related to headless React applications and WordPress sites; however I can even do backend server-side web programming as well, such as Node.js Express and Python Django to give examples.</Text>
            <Text my={5} maxW="800px" fontWeight={500}>I enjoy what I do and prove to be highly adaptable and able to learn new concepts and technologies quickly, while I love to continually grow my skill set in this industry and increase the services I can provide to clients and businesses.</Text>
          </Box>
          <Flex gap={5} mb={5}>
            <a href="https://www.linkedin.com/in/ryan-pittock-61169229b/" target="_blank">
              <FaLinkedin color="#0a66c2" size="2em" />
            </a>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            gap={3}
            pos={{ xl: "absolute" }}
            bottom={{ xl: "100px" }}
            left={{ xl: "50%" }}
            transform={{ xl: "translateX(-50%)" }}
          >
            <Text fontWeight={800} color="customBlue.500">See below for services I provide</Text>
            <Link href="#skills">
              <Box
                bg="customBlue.500"
                p={2}
                borderRadius="50%"
                transitionDuration="0.5s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              >
                <FaArrowDown size="2em" color="#ffffff" />
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
      <Box as="section" minH="100vh" p={10}>
        <Box px={{ base: 0, xl: 100 }}>
          <Flex flexDirection={{ base: "column", xl: "row" }} justifyContent="space-around" gap={5}>
            <TechSkills 
              tech="react"
              skillsTitles={[
                "Create custom functional components and hooks",
                "Develop headless-CMS applications with WordPress",
                "Make API calls using query libraries such as React Query",
                "Develop with Next.js and deploy on Vercel",
                "Test applications with Cypress",
              ]}
              skillsDescriptions={[
                "Implement any design and functionality into your app with custom components using the most up-to-date React code. Included in this is custom HTML and CSS layouts and styling such as flexbox, grids, as well as popular frontend frameworks such as Bootstrap, Tailwind CSS, and Chakra UI.",
                "Combine the power of React and WordPress by creating any kind of React app which can also use WordPress as its content-management system and much more. With headless apps, you can easily create both an app and a standard WordPress site that share the same backend.",
                "Efficiently pull any kind of API data into your app using the most updated best practices with React fetching libraries such as React Query; this allows your app to add features such as API data caching and more.",
                "Develop your app with the most popular modern React framework: Next.js. Next is the top recommended way to create a React app according to the offical React docs. The company behind Next.js (Vercel) also provides modern web hosting for your application.",
                "Applications are fully end-to-end tested using Cypress. I can create tests to gurantee your app is production ready and all of the features function as required.",
              ]}
            />
            <TechSkills 
              tech="wp"
              skillsTitles={[
                "Develop custom plugins and themes",
                "Create an ecommerce site with WooCommerce",
                "Implement any web design into your site with Elementor",
                "Host and maintain your WordPress website",
                "Allow you to change your website's content",
              ]}
              skillsDescriptions={[
                "My knowledge of PHP code allows me to add any custom code to your WordPress site: including any custom plugins and themes which you require; I can also effectively modify existing site plugins and themes to fit your needs.",
                "Boost sales with your own e-commerce site. I have industry experience with WooCommerce, the most popular e-commerce platform for WordPress.",
                "Want a beautiful WordPress site? Page-builders such as Elementor and WPBakery make creating well-designed pages effortless.",
                "Easily host and maintain your site with Hostinger: a modern WordPress hosting platform. I can also ensure all of your site's plugins, themes, and WordPress core are up-to-date.",
                "Change any of your site's content at any time using the WordPress site dashboard. WordPress is highly customisable, and does not require any coding knowledge for simple content changes such as text, theme styles, and images.",
              ]}
            />
          </Flex>
        </Box>
      </Box>
    </>
  )
}