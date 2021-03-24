import {
  Heading,
  Box,
  Image,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { HeartIcon } from "../components/atoms/icon";
import { getFavoriteData } from "../lib/post";

export async function getServerSideProps() {
  const posts = await (await getFavoriteData()).result;
  return {
    props: { posts },
  };
}

export default function Favorite({ posts }) {
  const [isLargerThan500, isDisplayingInBrowser] = useMediaQuery(
    "(min-width: 500px)"
  );
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign="center">お気に入り</Heading>
      {isLargerThan500 ? (
        <>
          <Render posts={posts} wide={"30%"} />
        </>
      ) : (
        <>
          <Render posts={posts} />
        </>
      )}
    </>
  );
}

function Render({ posts, wide }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };
  const IconClick = (e) => {
    e.preventDefault();
  };

  return (
    <Flex wrap="wrap">
      {posts.length ? (
        posts.map(({ doc, id, name, time, price, images, favo }) => {
          return (
            <>
              <Box
                my={4}
                width={wide}
                rounded="md"
                boxShadow="md"
                overflow="hidden"
                borderRadius="lg"
                pos="relative"
                _hover={{ bg: "#ebedf0", cursor: "pointer" }}
                mr="5"
              >
                <Box
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
                    position="relative"
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    bg="salmon"
                    px="4"
                    py="2"
                    borderBottomRightRadius="10"
                    fontWeight="semibold"
                    color="white"
                  >
                    {time}分
                  </Box>
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
                <form>
                  <HeartIcon
                    favo={favo}
                    doc={doc}
                    size={"15%"}
                    onClick={() => {
                      IconClick();
                    }}
                  />
                </form>
              </Box>
            </>
          );
        })
      ) : (
        <Text mx="auto" mt="100" fontSize="3xl">
          お気に入りにした物件はありません
        </Text>
      )}
    </Flex>
  );
}
