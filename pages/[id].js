import { Heading, Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import HomeGroup from "../components/HomeGroup";
import { getData } from "../lib/post";

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
      {/* {posts.map((post) => {
        return <h1>{post.name}</h1>;
      })} */}
      {[5, 10, 15, 20, 25].map((time) => (
          <Box key={time}>
            <HomeGroup walktime={time}/>
          </Box>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  console.log("datagetch");
  const posts = await (await getData()).result;
  // const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
