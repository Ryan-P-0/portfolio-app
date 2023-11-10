'use client'

import { Box, Flex, Image } from "@chakra-ui/react";

interface TechSkillsProps {
    tech: string;
    skills: Array<string>;
}

const TechSkills = ({ tech, skills }: TechSkillsProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
        <Box mb={5}>
            <Image src={`${tech}_logo.svg`} alt={`${tech}_logo.svg`} w={150} h={150} />
        </Box>
        <Box as="ul" minW={280}>
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