import {
  Heading,
  Box,
  Text,
  Textarea,
  Button,
  Center,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./_app";
import { useForm } from "react-hook-form";
import { HomeItem } from "../components/molecules/HomeItem";

const Favorite = () => {
  const router = useRouter();
  const [datas, setData] = useState<[]>([]);
  const UserId = useContext(AuthContext)?.uid;
  const [loading, setLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const toast = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  useEffect(() => {
    axios
      .get(`//${location.host}/api/getFavorite`, {
        params: { UserId: UserId },
      })
      .then((res) => {
        const result = res.data.props.datas;
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [UserId]);

  // const handleClick = (id: string) => {
  //   router.push({
  //     pathname: "homes/[id]",
  //     query: { id: id },
  //   });
  // };

  const PostComment = async (e: any, HouseId: string) => {
    const Comment = e[HouseId];
    axios
      .get(`//${location.host}/api/updateComment`, {
        params: { HouseId: HouseId, Comment: Comment, UserId: UserId },
      })
      .then((res) => {
        console.log(res);
        setIsDisabled(true);
      })
      .then((res) => {
        toast({
          title: "保存しました",
          position: "top",
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "保存できませんでした",
          position: "top",
          status: "error",
          isClosable: true,
        });
      });
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
      {loading ? (
        <Center>
          <Spinner size="xl" thickness="3px" />
        </Center>
      ) : datas.length ? (
        datas?.map((data: any) => {
          return (
            <Box mb="3em" key={data.id}>
              <HomeItem {...data}>
                <form onSubmit={handleSubmit((e) => PostComment(e, data.id))}>
                  <Textarea
                    w={{ base: "100%", md: "md" }}
                    placeholder="どこが気に入ったか"
                    colorScheme="blackAlpha"
                    focusBorderColor="gray"
                    {...register(data.id)}
                    defaultValue={data.comment ? data.comment : null}
                    isDisabled={isDisabled}
                  />
                  <Center>
                    <Button
                      type="submit"
                      mb={{ base: "2em", md: "0" }}
                      _focus={{ border: "none" }}
                      display="block"
                    >
                      保存
                    </Button>
                  </Center>
                </form>
              </HomeItem>
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
};
export default Favorite;
