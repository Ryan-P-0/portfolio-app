'use client'

import { Box, Text, Flex } from "@chakra-ui/react";
import { BsLink45Deg } from "react-icons/bs";

interface ProjectProps {
    projectName: string;
    projectLink: string;
    projectOutline: Array<string>;
    projectRole: Array<string>;
    projectFeatures: Array<string>;
}

const Project = ({ projectName, projectLink, projectOutline, projectRole, projectFeatures }: ProjectProps) => {
    return (
        <Box as="main" minH="100vh" p={4}>
            <Box m={{ base: 0, md: 5 }}>
                <Text as="h1" fontSize={{ base: "2.5em", sm: "3.5em" }} fontWeight={800}>{projectName}</Text>
                <Box px={{ base: 0, md: 5 }}>
                    <Flex>
                        <a href={projectLink} target="_blank">
                            <Flex alignItems="center" gap={1}>
                                <Text color="customBlue.500" fontWeight={700} decoration="underline">{projectName} Page</Text>
                                <BsLink45Deg color="#0086ff" size="1.5em" />
                            </Flex>
                        </a>
                    </Flex>
                    <Box>
                        <Box mt={5}>
                            <Text color="customBlue.500" fontWeight={700}>Project Outline</Text>
                            {
                                projectOutline.map((paragraph, index) => (
                                    <Text key={index} mt={index !== 0 ? 2 : 0}>{paragraph}</Text>
                                ))
                            }
                        </Box>
                        <Box mt={5}>
                            <Text color="customBlue.500" fontWeight={700}>My Role in the Project</Text>
                            {
                                projectRole.map((paragraph, index) => (
                                    <Text key={index} mt={index !== 0 ? 2 : 0}>{paragraph}</Text>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box>
                        <Box mt={5}>
                            <Text color="customBlue.500" fontWeight={700}>Application Features</Text>
                            <Box as="ul">
                                {
                                    projectFeatures.map((listItem, index) => (
                                        <Box key={index} as="li" mx={5}>{listItem}</Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
  
export default Project;