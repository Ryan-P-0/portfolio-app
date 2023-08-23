'use client'

import { Card, CardBody, Heading, Stack, Text, Image, Link } from "@chakra-ui/react";

const CardComponent = ({ title, description, linkHref, imgSrc }) => {
  return (
    <Link href={linkHref} style={{ textDecoration: 'none' }}>
      <Card w={379} h={379}>
        <CardBody>
          <Image src={imgSrc} alt={title} borderRadius='lg' />
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