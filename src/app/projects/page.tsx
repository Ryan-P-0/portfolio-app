'use client'

import { Box, Text } from "@chakra-ui/react";

export default function Projects() {
    return (
      <Box as="main" m={5}>
        <Text fontSize="4em">Projects</Text>
        <Box backgroundColor="#d2ebf9" p={5}>
          <Text fontSize="1.75em" fontWeight="bold">LoadLink</Text>
          <ul>
            <Box as="li" m={5}>
              <Text color="#235676" fontWeight="bold">Project Outline</Text>
              <p>A headless-CMS transport marketplace site built with React and WordPress to ensure all types of carriers across Australia have access to the latest nation-wide loads, while ensuring them the opportunity to provide their delivery services to those looking to ship their small or heavy haulage from A to B with a modern platform built to handle multiple effective transportation and direct the communication between shipper and carrier.</p>
              <p>The user base of the site was split into two: shippers who had haulage in a location which they wanted transported to another, and carriers who were truck drivers that transported loads. Shippers could register and use the site for free, but carriers required a subscription; shippers posted their loads on the site, while carriers posted their trucks.</p>
            </Box>
            <Box as="li" m={5}>
              <Text color="#235676" fontWeight="bold">My Role in the Project</Text>
              <p>I was employed as a React developer with a small web development company when I worked on this project. The project was split into three different sites: a simple WordPress landing page, a WordPress ecommerce and management site (referred to as the portal), and a headless React application which pulled data from the portal and displayed it in a tabular format to make viewing listings fast and easy for both shippers and carriers.</p>
              <p>I was the only React developer in the company and I developed the React application (app.loadlink) by myself. The portal (portal.loadlink) was initally developed by an experienced WordPress developer in the company since at the time I had zero knowledge or experience of WordPress, however this project taught me WordPress development in addition to my skills as a React developer: I first started by writing PHP functions which hooked into WordPress and created custom REST API endpoints on the WordPress site since this was very essential for me as the headless React developer who relied on the built-in WordPress REST API for all data; from there I learnt the rest of WordPress development such as creating custom themes and plugins, creating custom post types and post meta, WP queries, hooks and filters, and even a bit of WooCommerce: I then used these newly learnt skills to continue development on the portal site as the experienced WordPress developer moved on to work on other projects while I continued the LoadLink project alone (apart from the project manager). Therefore I also helped develop the portal site, and was responsible for implementing all additional features from a certain point in the project.</p>
              <p>In addition to all my development work on both the React application and the portal site: I also implemented a truck matching algorithm using PHP on another server which communicated with the portal site. The functionality was that every 10 minutes: all currently active posted loads were compared with all currently active posted trucks, and certain criteria such as location radius, available truck space etc. were used to determine if each load-truck pair were a match; if they were a match then both the shipper and carrier of the posted load and truck respectively would get notified of a matched listing via email, plus each would have a section in the portal to see all listings which matched their posts.</p>
            </Box>
          </ul>
          <Box>
            <Text color="#235676" fontWeight="bold">
              <a href="https://app.loadlink.com.au/" target="_blank">LoadLink React App</a>
            </Text>
          </Box>
        </Box>
      </Box>
    )
  }
  