import { Heading, Box, Image, Flex, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { HeartIcon } from "../components/atoms/Icons/HeartIcon.jsx";
import { Price } from "../components/atoms/price.jsx";
import axios from "axios";
import { AuthContext } from "./_app";

export default function Favorite() {
  const router = useRouter();
  const [datas, setData] = useState([]);
  const UserId = useContext(AuthContext)?.uid;
  const [comments, setComments] = useState({});
  useEffect(() => {
    let unmounted = false;
    (async () => {
      await axios
        .get(`//${location.host}/api/getFavorite`, {
          params: { UserId: UserId },
        })
        .then(async (res) => {
          const result = await res.data.props;
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

  const handleChange = (e, id) => {
    setComments(e.target.value);
    const comment=e.target.value
    setTimeout(async () => {
      await axios.get(`//${location.host}/api/updateComment`, {
        params:  { [id]: comment} ,
      });
      console.log({ [id]: comment});
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign="center" mb={"1em"}>
        お気に入り
      </Heading>
      {datas?.length !== 0 ? (
        datas.datas?.map(({ doc, id, name, price, images, favoUser, time }) => {
          return (
            <Box
              key={id}
              display={{ base: "inline-block", md: "flex" }}
              justifyContent="center"
              mx={{ base: "auto", md: "0" }}
            >
              <Box
                m={{ base: "0 0 1em", md: "0 1em 2em 0" }}
                maxW="md"
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
              {datas.comments?.map((comment) => {
                return (
                  <>
                    <Textarea
                      maxW="md"
                      mb={{ base: "2em", md: "0" }}
                      placeholder="どこが気に入ったか"
                      colorScheme="blackAlpha"
                      focusBorderColor="gray"
                      value={comment.id === id ? comment.comment : comments[id]}
                      onChange={(e) => handleChange(e, id)}
                    />
                  </>
                );
              })}
            </Box>
          );
        })
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="3xl">
            お気に入りにした物件は
            <br />
            ありません
          </Text>
        </Box>
      )}
    </>
  );
}
