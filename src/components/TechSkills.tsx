'use client'

import { Box, Text, Flex, Image } from "@chakra-ui/react";

interface TechSkillsProps {
    tech: string;
    skills: string;
}

const TechSkills = ({ tech, skills }: TechSkillsProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
        <Box mb={5}>
            <Image src={`/portfolio-app/${tech}_logo.svg`} alt={`/portfolio-app/${tech}_logo.svg`} w={100} h={100} />
        </Box>
        <Box minW={280}>
            <Text maxW="400px">{skills}</Text>
        </Box>
    </Flex>
  );
};

export default TechSkills;