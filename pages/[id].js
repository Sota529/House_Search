import {
  Heading,
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  FormLabel,
  FormControl,
  Stack,
  RadioGroup,
  Radio
} from "@chakra-ui/react";
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
      <Sort />
      {[5, 10, 15, 20, 25].map((time) => (
        <Box key={time} my={2}>
          <HomeGroup walktime={time} posts={posts} />
        </Box>
      ))}
    </>
  );
}
function Sort() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display="block"
        align="right"
        colorScheme="blue"
        mr={4}
        onClick={onOpen}
      >
        <Button>条件を絞る</Button>
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">検索条件</DrawerHeader>
            <DrawerBody>
              <Box>
                <FormLabel fontWeight="semibold">家賃</FormLabel>
                <FormControl as="fieldset">
                  <RadioGroup defaultValue="" >
                    <Stack direction="row">
                      <Radio value="50000" colorScheme="green">50,000円以下</Radio>
                      <Radio value="100000" colorScheme="green">100,000円以下</Radio>
                      <Radio value="150000" colorScheme="green">150,000円以下</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Box>
            </DrawerBody>
            <DrawerFooter>
              <Button variant
            ="outline" mr={3} onClick={onClose}>
                閉じる
              </Button>
              <Button color="blue" onClick={onClose}>検索</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
