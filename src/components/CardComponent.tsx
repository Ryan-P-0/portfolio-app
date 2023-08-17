'use client'

import { Card, CardBody, Heading, Stack, Text, Image, Link } from "@chakra-ui/react";

const CardComponent = ({ title, href, w, h }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Card w={w} h={h}>
        <CardBody>
          <Image
            src='loadlink-app.png'
            alt={title}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>A React and Wordpress Headless CMS web application for a nation-wide transport company.</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardComponent;