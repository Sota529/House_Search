import {
  Heading,
  Box,
  Image,
  Flex,
  Text,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HeartIcon } from "../components/Icons/HeartIcon";
import { Price } from "../components/atoms/price";
import axios from "axios";

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
      <Heading textAlign="center" mb={"1em"}>お気に入り</Heading>
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

function Render({ wide }) {
  const router = useRouter();
  const [datas, setData] = useState([]);
  let house;

  useEffect(() => {
    let unmounted = false;
    (async () => {
      await axios
        .get(`//${location.host}/api/getFavorite`)
        .then((res) => {
          const result = res.data.props.datas;
          if (!unmounted) {
            setData(result);
          }
        })
        .then(console.log(datas))
        .catch((error) => {
          console.log(error);
        });
    })();
    return () => {
      unmounted = true;
    };
  }, []);

  const handleClick = (id) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };
  {
    house = datas.map(({ doc, id, name, price, images, favo, time }) => {
      return (
        <React.Fragment key={id}>
          <Box
            my={4}
            maxW="sm"
            rounded="md"
            boxShadow="md"
            overflow="hidden"
            borderRadius="lg"
            pos="relative"
            _hover={{
              border: "2px",
              borderColor: "teal.300",
              cursor: "pointer",
            }}
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
                key={images[0]}
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
                <Box>
                  <Box
                    mt=""
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    display="block"
                  >
                    {name}
                  </Box>
                  <Box>
                    <Flex>
                      <Price price={price} size={"1.8em"} />
                      <Box ml={2}>
                        <Text fontSize={"0.8em"}>敷金:{price}</Text>
                        <Text fontSize={"0.8em"}>礼金:{price}</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box position="absolute" bottom="4" right="6">
              <HeartIcon favo={favo} doc={doc} />
            </Box>
          </Box>
        </React.Fragment>
      );
    });
  }

  const text = (
    <Text textAlign="center" mt="100" fontSize="3xl">
      お気に入りにした物件はありません
    </Text>
  );
  return (
    <>
      {house.length ? (
        <SimpleGrid columns={2}  w={"90%"} mx="auto">
          {house}
        </SimpleGrid>
      ) : (
        text
      )}
    </>
  );
}
