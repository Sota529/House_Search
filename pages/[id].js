import { Heading, Box, Button,RadioGroup,Stack,Radio } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import HomeGroup from "../components/molecules/HomeGroup";
import { getData } from "../lib/post";
export async function getServerSideProps({ params }) {
  const posts = await (await getData(params)).result;
  return {
    props: { posts },
  };
}

export default function HouseView({ posts }) {
  const router = useRouter();
  const [value, setValue] = useState("1")
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading align="center" isTruncated mb={6}>
        {router.query.Name}大学
      </Heading>
      <Link href="/favorite">
        <Box display="block" align="right" mr={4} mb={2}>
          <Button>お気に入り</Button>
        </Box>
      </Link>
      <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1" colorScheme="green">¥50,000以下</Radio>
        <Radio value="2" colorScheme="green">¥100,000以下</Radio>
        <Radio value="3" colorScheme="green">¥150,000以下</Radio>
      </Stack>
    </RadioGroup>
      {/* <Sort /> */}
      {[5, 10, 15, 20, 25].map((time) => (
        <Box key={time} my={2}>
          <HomeGroup walktime={time} posts={posts} />
        </Box>
      ))}
    </>
  );
}
