'use client'

import { Box, Text, Image, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from "@chakra-ui/react";

interface TechSkillsProps {
    tech: string;
    skillsTitles: Array<string>;
    skillsDescriptions: Array<string>;
}

const TechSkills = ({ tech, skillsTitles, skillsDescriptions }: TechSkillsProps) => {
  return (
    <Flex flexDirection="column" flex="1" id="skills">
      <Box mb={5} alignSelf="center">
          <Image src={`/portfolio-app/${tech}_logo.svg`} alt={`/portfolio-app/${tech}_logo.svg`} w={100} h={100} />
      </Box>
      <Accordion allowMultiple>
          {
            skillsTitles.map((title, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton p={4} _expanded={{ bg: "customBlue.500", color: "white" }}>
                      <Box as="span" flex="1" textAlign="left">
                        <Text>
                          {title}
                        </Text>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel bg="customBlue.100" p={4}>
                  {skillsDescriptions[index]}
                </AccordionPanel>
            </AccordionItem>
            ))
          }
      </Accordion>
    </Flex>
  );
};

export default TechSkills;