import Head from "next/head";
import { useRouter } from "next/router";
import {
  Center,
  Container,
  Wrap,
  WrapItem,
  Button,
  Heading,
  ListItem,
  List,
  Image,
} from "@chakra-ui/react";
import { getData } from "../lib/post";
const univs = [
  { id: "Tokyo", Name: "東京" },
  { id: "Waseda", Name: "早稲田" },
  { id: "Tokyorika", Name: "東京理科" },
  { id: "Tokoha", Name: "常葉" },
  { id: "Keio", Name: "慶応" },
  { id: "Meizi", Name: "明治" },
  { id: "Chiba", Name: "千葉" },
  { id: "Rikyo", Name: "立教" },
  { id: "Hosei", Name: "法政" },
  { id: "Dentsu", Name: "電気通信" },
];
export default function Home({ posts }) {
  const router = useRouter();
  const handleLink = (id, Name) => {
    router.push({
      pathname: "/[id]",
      as: "[id]",
      query: { id: id, Name: Name },
    });
  };
  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading align="center" isTruncated mb={6}>
        物件を探す
      </Heading>
      <div>
        <h1>POST一覧</h1>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.name}</li>;
          })}
        </ul>
      </div>
      <Container maxW="container.lg">
        <Heading as="h4" size="lg" isTruncated>
          大学名
        </Heading>
        <Wrap mt={4} mb={8}>
          {univs.map(({ id, Name }) => (
            <WrapItem key={Name}>
              <Button
                size="md"
                colorScheme="blue"
                onClick={() => handleLink(id, Name)}
              >
                {Name}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </Container>

      <Center>
        <Image src="/images/Frame.svg" alt="アイコン"></Image>
      </Center>
      <Container align="center">
        <Heading as="h4" size="lg" isTruncated mb={4}>
          特徴
        </Heading>
        <Heading as="h5" fontSize="lg" mb={2}>
          大学生に特化したサイト!
        </Heading>
        <List spacing={3}>
          <ListItem fontWeight="bold">1.即入居物件のみを表示!</ListItem>
          <Heading as="h5" fontSize="lg">
            2.学校から
          </Heading>
          <ListItem fontSize={24} color="red" as="mark">
            5,10,15,20,25
          </ListItem>
          <Heading as="h5" fontSize="lg">
            <ListItem>分単位で探せる！</ListItem>
          </Heading>
        </List>
      </Container>
    </>
  );
}
export async function getStaticProps() {
  console.log("datagetch");
  const posts = await (await getData()).result;
  // const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
