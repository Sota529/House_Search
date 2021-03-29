import {
  Heading,
  Box,
  Button,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomeGroup from "../components/molecules/HomeGroup";
import { getData } from "../lib/post";

export async function getServerSideProps(context) {
  const Area = context.query.id;
  const Sort = context.query.sort;
  const posts = await (await getData(Area, Sort)).result;
  return {
    props: { posts },
  };
}
export default function HouseView({ posts }) {
  const router = useRouter();
  const [val, setVal] = useState("0");

  useEffect(() => {
    const radioClick = async () => {
        router.replace({
          pathname: location.pathname,
          query: { sort: val ,Name:router.query.Name},
        });
      
    };
    radioClick();
  }, [val]);
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading align="center" isTruncated mb={6}>
        {router.query.Name}大学
      </Heading>
      <Box display="block" align="right" mr={4} mb={2}>
        <Link href="/favorite">
          <Button>お気に入り</Button>
        </Link>
      </Box>
      <Flex >
      <Text fontWeight="semibold" mr={21}>値段</Text>
      <RadioGroup onChange={setVal} value={val} defaultChecked="0">
        <Stack direction="row">
          <Radio value="0" colorScheme="green" checked={val === "0"}>
            選択なし
          </Radio>
          <Radio value="50000" colorScheme="green" checked={val === "50000"}>
            ¥50,000以下
          </Radio>
          <Radio value="100000" colorScheme="green" checked={val === "100000"}>
            ¥100,000以下
          </Radio>
          <Radio value="150000" colorScheme="green" checked={val === "150000"}>
            ¥150,000以下
          </Radio>
        </Stack>
      </RadioGroup>
      </Flex>
      {[5, 10, 15, 20, 25].map((time) => (
        <Box key={time} my={2}>
          <HomeGroup walktime={time} posts={posts} />
        </Box>
      ))}
    </>
  );
}
