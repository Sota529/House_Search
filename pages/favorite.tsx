import {
  Heading,
  Box,
  Image,
  Flex,
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
import { NextPage } from "next";
import { error } from "console";

const Favorite: NextPage = () => {
  const [datas, setData] = useState<[]>([]);
  const userId = useContext(AuthContext)?.uid;
  const [loading, setLoading] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const toast = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  useEffect(() => {
    axios
      .get(`//${location.host}/api/getFavorite`, {
        params: { UserId: userId },
      })
      .then((res) => {
        const result = res.data.props.datas;
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  const PostComment = async (e: any, HouseId: string) => {
    const comment = e[HouseId];
    if (comment == "\n" || comment == "") {
      toast({
        title: "コメントを入力してください",
        position: "top",
        status: "warning",
        isClosable: true,
      });
      return;
    }

    try {
      setDisabled(true);
      await axios.get(`//${location.host}/api/updateComment`, {
        params: { HouseId: HouseId, Comment: comment, UserId: userId },
      });
      toast({
        title: "保存しました",
        position: "top",
        isClosable: true,
      });
    } catch {
      toast({
        title: "保存できませんでした",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } finally {
      setDisabled(false);
    }
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
            <Box mb="3em">
              <HomeItem {...data}>
                <form
                  name={data.id}
                  onSubmit={handleSubmit((e) => PostComment(e, data.id))}
                >
                  <Textarea
                    w="md"
                    placeholder="どこが気に入ったか"
                    colorScheme="blackAlpha"
                    focusBorderColor="gray"
                    isDisabled={disabled}
                    {...register(data.id)}
                    defaultValue={data.comment ? data.comment : null}
                  />
                  <Center>
                    <Button
                      type="submit"
                      mb={{ base: "2em", md: "0" }}
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
