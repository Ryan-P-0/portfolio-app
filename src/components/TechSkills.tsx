'use client'

import { Box, Flex, Image } from "@chakra-ui/react";

const TechSkills = ({ tech, skills }) => {
  return (
    <Flex flexDirection="column" alignItems="center" p={10}>
        <Box mb={5}>
            <Image src={`${tech}_logo.svg`} alt={`${tech}_logo.svg`} w={150} h={150} />
        </Box>
        <Box as="ul">
            {
                skills.map(skill => (
                    <Box key={skill} as="li">{skill}</Box>
                ))
            }
        </Box>
    </Flex>
  );
};

export default TechSkills;