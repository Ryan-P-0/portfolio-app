'use client'

import { Card, CardBody, Heading, Stack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface CardComponentProps {
  title: string;
  description: string;
  linkHref: string;
  imgSrc: string;
}

const CardComponent = ({ title, description, linkHref, imgSrc }: CardComponentProps) => {
  return (
    <Link href={linkHref} style={{ textDecoration: 'none' }}>
      <Card w={379} h={379}>
        <CardBody>
          <Image src={`/portfolio-app/${imgSrc}`} alt={title} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardComponent;