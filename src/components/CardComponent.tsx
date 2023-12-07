'use client'

import { Card, CardBody, Heading, Stack, Text, Image, WrapItem, Center } from "@chakra-ui/react";
import Link from "next/link";

interface CardComponentProps {
  title: string;
  description: string;
  linkHref: string;
  imgSrc: string;
}

const CardComponent = ({ title, description, linkHref, imgSrc }: CardComponentProps) => {
  return (
    <WrapItem>
      <Center w={{ base: 260, sm: 379 }} h={379}>
        <Link href={linkHref} style={{ textDecoration: 'none' }}>
          <Card
            transitionDuration="0.5s"
            _hover={{
              bg: "customBlue.500",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            <CardBody>
              <Image src={`/${imgSrc}`} alt={title} borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{title}</Heading>
                <Text>{description}</Text>
              </Stack>
            </CardBody>
          </Card>
        </Link>
      </Center>
    </WrapItem>
  );
};

export default CardComponent;