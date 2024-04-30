'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import TechSkills from "@/components/TechSkills";
import Image from "next/image";
import Link from "next/link";
import bgWhite from "../../public/bg-white.jpg";
import "./custom.css";

export default function Home() {
  return (
    <>
      <Box as="section" minH="100vh" p={{ base: 4, md: 10 }} pos="relative">
        <Image 
          src={bgWhite}
          alt="bg-white.jpg"
          fill
          sizes="100vw"
          style={{ 
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <Box px={{ base: 0, xl: 10 }}>
          <Box as="header">
            <Text as="h1" fontSize={{ base: "1.5em", sm: "3em", md: "3.5em" }} fontWeight={800}>Experienced Software Developer</Text>
            <Text fontWeight={800} color="customBlue.500">Ryan Pittock</Text>
          </Box>
          <Box as="main">
            <Text my={5} maxW="800px" fontWeight={500}>Experienced software developer with a background in React, Next, Python, and WordPress.</Text>
            <Text my={5} maxW="800px" fontWeight={500}>Demonstrated industry experience working with software companies and delivering high-quality code solutions and application features to businesses which solve real-world problems and provide manifest and demonstrable benefits for the client.</Text>
            <Text my={5} maxW="800px" fontWeight={500}>Due to my particular background in software development, the services I provide to clients are mostly related to React applications, WordPress sites, static site generation (SSG), and back end web applications; however I am able to program in many languages and provide expertise across a broad range of programming languages and software development principles to satisfy a plethora of client needs and requirements.</Text>
            <Text my={5} maxW="800px" fontWeight={500}>In addition to delivering cutting edge applications and websites, I always utilise the best modern hosting platforms to ensure maximum stability and scalability of your site and provide reliable maintenance, as well as a complete set of SEO strategies to get your site top-ranking within the Google search results. Better rankings = more exposure = more sales.</Text>
          </Box>
          <Flex gap={5} my={5}>
            <a href="https://www.linkedin.com/in/ryan-pittock-61169229b/" target="_blank">
              <FaLinkedin color="#0a66c2" size="2em" />
            </a>
            <a href="https://github.com/Ryan-P-0" target="_blank">
              <FaGithub size="2em" />
            </a>
          </Flex>
          <Flex flexDirection="column" my={5}>
            <Flex alignItems="center" gap={2}>
              <Box>
                <IoIosMail size="2em" />
              </Box>
              <Box>
                <Text fontWeight={500}>ryandp@mailfence.com</Text>
              </Box>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <Box>
                <MdPhone size="2em" />
              </Box>
              <Box>
                <Text fontWeight={500}>04 1165 7805</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            gap={3}
            my={{ base: 10, xl: 0 }}
            pos={{ xl: "absolute" }}
            bottom={{ xl: "130px" }}
            left={{ xl: "50%" }}
            transform={{ xl: "translateX(-50%)" }}
          >
            <Link href="#skills">
              <Box
                bg="customBlue.500"
                py="20px"
                px="70px"
                transitionDuration="0.5s"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                <Text fontWeight={600} color="#ffffff">SERVICES</Text>
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
                "Develop with Next.js and deploy on Vercel or a VPS",
                "Test applications with Cypress",
              ]}
              skillsDescriptions={[
                "Implement any design and functionality into your app with custom components using the most up-to-date React code. Included in this is custom HTML and CSS layouts and styling such as flexbox, grids, as well as popular frontend frameworks such as Bootstrap, Tailwind CSS, and Chakra UI.",
                "Combine the power of React and WordPress by creating any kind of React app which can also use WordPress as its content-management system and much more. With headless apps, you can easily create both an app and a standard WordPress site that share the same backend.",
                "Efficiently pull any kind of API data into your app using the most updated best practices with React fetching libraries such as React Query; this allows your app to add features such as API data caching and more.",
                "Develop your app with the most popular modern React framework: Next.js. Next is the top recommended way to create a React app according to the offical React docs. The company behind Next.js (Vercel) also provides modern web hosting for your application; or I can set up a Virtual Private Server (VPS) with DigitalOcean to host your app.",
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