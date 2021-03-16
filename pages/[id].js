import { Heading, Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPostId } from "../lib/post";
import HomeGroup from "../components/HomeGroup";
import { getData } from "../lib/post";

export async function getStaticPaths() {
  const paths = getPostId();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const posts = await (await getData(params)).result;
  return {
    props: { posts },
  };
}

export default function HouseView({ posts }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading align="center" isTruncated mb={6}>
        {router.query.Name}大学
      </Heading>
      {[5, 10, 15, 20, 25].map((time) => (
        <Box key={time} my={2}>
          <HomeGroup walktime={time} posts={posts} />
        </Box>
      ))}
    </>
  );
}
