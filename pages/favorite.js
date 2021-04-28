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
import { useEffect, useState, useContext } from "react";
import { HeartIcon } from "../components/atoms/Icons/HeartIcon";
import { Price } from "../components/atoms/price";
import axios from "axios";
import { AuthContext } from "./_app";

export default function Favorite() {
  const router = useRouter();
  const [datas, setData] = useState([]);
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const UserId = useContext(AuthContext)?.uid;
  let house;

  useEffect(() => {
    let unmounted = false;
    (async () => {
      await axios
        .get(`//${location.host}/api/getFavorite`, {
          params: { UserId: UserId },
        })
        .then((res) => {
          const result = res.data.props.datas;
          if (!unmounted) {
            setData(result);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })();
    return () => {
      unmounted = true;
    };
  }, [UserId]);

  const handleClick = (id) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };

  {
    house = datas?.map(({ doc, id, name, price, images, favoUser, time }) => {
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
                px={{ sm: "2em", md: "1em" }}
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
                        <Text fontSize={"0.8em"}>敷:{price}</Text>
                        <Text fontSize={"0.8em"}>礼:{price}</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box position="absolute" bottom="3" right="3">
              <HeartIcon favo={favoUser} doc={doc} size={"3em"} />
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
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign="center" mb={"1em"}>
        お気に入り
      </Heading>
      {house?.length ? (
        <SimpleGrid columns={{ sm: 1, md: 2 }} w={"90%"} mx="auto">
          {house}
        </SimpleGrid>
      ) : (
        text
      )}
    </>
  );
}
