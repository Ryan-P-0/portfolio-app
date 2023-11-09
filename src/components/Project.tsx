'use client'

import { Box, Text, Flex } from "@chakra-ui/react";
import { BsLink45Deg } from "react-icons/bs";

const Project = ({ projectName, projectLink, projectOutline, projectRole, projectFeatures }) => {
    return (
        <Box as="main" m={{ base: 0, md: 5 }}>
            <Text as="h1" fontSize="3.5em" fontWeight="500" my={{ base: 0, md: 5 }}>{projectName}</Text>
            <Box bg="tyrianPurple.100" p={{ base: 0, md: 5 }}>
                <Flex>
                    <a href={projectLink} target="_blank">
                        <Flex alignItems="center" gap={1}>
                            <Text color="tyrianPurple.500" fontWeight="bold" decoration="underline">{projectName} Page</Text>
                            <BsLink45Deg color="#b80049" size="1.5em" />
                        </Flex>
                    </a>
                </Flex>
                <Box>
                    <Box mt={5}>
                        <Text color="tyrianPurple.500" fontWeight="bold">Project Outline</Text>
                        {
                            projectOutline.map((paragraph, index) => (
                                <Text mt={index !== 0 ? 2 : 0}>{paragraph}</Text>
                            ))
                        }
                    </Box>
                    <Box mt={5}>
                        <Text color="tyrianPurple.500" fontWeight="bold">My Role in the Project</Text>
                        {
                            projectRole.map((paragraph, index) => (
                                <Text mt={index !== 0 ? 2 : 0}>{paragraph}</Text>
                            ))
                        }
                    </Box>
                </Box>
                <Box>
                    <Box mt={5}>
                        <Text color="tyrianPurple.500" fontWeight="bold">Application Features</Text>
                        <Box as="ul">
                            {
                                projectFeatures.map(listItem => (
                                    <Box as="li" mx={5}>{listItem}</Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
  
export default Project;