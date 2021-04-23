import { Box, Button, Container, Heading, Icon, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/atoms/Input";
import { auth } from "../../lib/db";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const onLogin = async (e) => {
    try {
      await auth
        .createUserWithEmailAndPassword(e.email, e.password)
        .then(() => {
          alert("ユーザーの作成に成功しました");
          router.back()
          router.back()
        });
    } catch (err) {
      alert(err.message);
    }
  };
  
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     user && router.push("/");
  //   });
  // }, []);

  return (
    <>
      <Container centerContent="true">
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
          <CustomInput type="submit" value="作成する" />
        </form>
      </Container>
    </>
  );
}