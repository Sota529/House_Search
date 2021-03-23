import { Heading, Box, Image, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { getFavoriteData } from "../lib/post";

export async function getStaticProps() {
  const posts = await (await getFavoriteData()).result;
  console.log(posts);
  return {
    props: { posts },
  };
}

export default function Favorite({ posts }) {
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign="center">お気に入り</Heading>
      <Flex wrap="wrap">
      {posts.map(({ doc, id, name, time, price, images, favo }) => {
        return (
            <Box
              my={4}
              maxW="sm"
              rounded="md"
              boxShadow="md"
              overflow="hidden"
              borderRadius="lg"
              pos="relative"
              _hover={{ bg: "#ebedf0", cursor: "pointer" }}
              mr="5"
              onClick={() => {
                handleClick(id);
              }}
            >
              <Image
                src={images[0]}
                alt="家の写真"
                width="100%"
                borderRadius="lg"
                key={images[0]}
              />
              <Box p={2}>
                <Box
                  mt=""
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  <Box top="0">{name}</Box>
                </Box>
                <Box
                  as="span"
                  borderRadius="md"
                  fontWeight="semibold"
                  bg="green.400"
                  color="white"
                  isTruncated
                  px={2}
                  h={8}
                >
                  ¥{price}
                </Box>
              </Box>
            </Box>
        );
      })}
      </Flex>
    </>
  );
}
