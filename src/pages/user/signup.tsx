import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { CustomInput } from "../../components/atoms/CustomInput/CustomInput";
import { auth } from "../../lib/db";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Signup: NextPage = () => {
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const onLogin = async (e: { email: string; password: string }) => {
    try {
      await auth
        .createUserWithEmailAndPassword(e.email, e.password)
        .then(() => {
          toast({
            title: "ユーザーを作成しました",
            position: "top",
            isClosable: true,
          });
          router.push("/");
        });
    } catch (err) {
      toast({
        title: "ユーザーを作成に失敗しました",
        position: "top",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Container centerContent={true}>
        <Heading as="h2">新規登録</Heading>
        <Icon
          borderRadius="full"
          boxSize="150px"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          my="1em"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Icon>
        <form onSubmit={handleSubmit(onLogin)}>
          <CustomInput
            label="メールアドレス"
            type="email"
            holder="アドレスを入力"
            isRequired
            //react-hook-form
            register={register("email")}
            error={errors.email?.message}
          />
          <Box mb="1em" />
          <CustomInput
            type="password"
            label="パスワード"
            holder="パスワードを入力"
            isRequired
            //react-hook-form
            register={register("password", {
              minLength: {
                value: 4,
                message: "パスワードは4文字以上にしてください",
              },
              maxLength: {
                value: 8,
                message: "パスワードは8文字以下にしてください",
              },
            })}
            error={errors.password?.message}
          />
          <Box mb="2em" />
          <Box textAlign="center">
            <Button
              size="lg"
              type="submit"
              width="100%"
              colorScheme="teal"
              shadow="md"
            >
              新規作成
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};
export default Signup;
