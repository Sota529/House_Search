import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useRouter } from "next/router";
import React, { VFC } from "react";
import { HeartIcon } from "../atoms/Icons/HeartIcon";
import { Price } from "../atoms/price";

type HomeItemType = {
  id?: string;
  thumbnail?: string;
  time?: string;
  name?: string;
  price?: number;
  favoUser?: [string];
  image?: [string];
  doc?: string;
  children?: any;
};

export const HomeItem: VFC<HomeItemType> = (props) => {
  const router = useRouter();
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const handleClick = (id: string) => {
    router.push({
      pathname: "homes/[id]",
      query: { id: id },
    });
  };
  return (
    <Box display={{ md: "flex" }} justifyContent="center">
      <Box
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
            handleClick(props.id);
          }}
        >
          <Image
            src={props.thumbnail}
            objectFit="cover"
            maxH="50%"
            fallbackSrc="https://placehold.jp/f0f0f0/f0f0f0/150x150.png?text=%0A"
            alt="家の写真"
            borderRadius="lg"
            w="100%"
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
            {props.time}分
          </Box>
          <Box p="0.4em" h="5em">
            <Box fontWeight="semibold" as="h4" display="block">
              {props.name}
            </Box>
            <Box>
              <Flex>
                <Price price={props.price} size={"1.8em"} />
                {isLargerThan700 ? (
                  <Box ml={2}>
                    <Text fontSize={"0.8em"}>敷:{props.price}</Text>
                    <Text fontSize={"0.8em"}>礼:{props.price}</Text>
                  </Box>
                ) : null}
              </Flex>
            </Box>
          </Box>
        </Box>
        {isLargerThan700 ? (
          <Box position="absolute" bottom="3" right="3">
            <HeartIcon favo={props.favoUser} doc={props.doc} size={"3em"} />
          </Box>
        ) : (
          <Box position="absolute" bottom="3" right="3">
            <HeartIcon favo={props.favoUser} doc={props.doc} size={"2.4em"} />
          </Box>
        )}
      </Box>
      <Box ml={{ md: "1em" }} mt={{ base: "1em", md: "0" }}>
        {props.children ? props.children : null}
      </Box>
    </Box>
  );
};
