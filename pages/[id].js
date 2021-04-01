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
import axios from "axios";
import HomeGroup from "../components/molecules/HomeGroup";

export default function HouseView() {
  const router = useRouter();
  const [datas, setData] = useState([]);
  const [val, setVal] = useState("0");

  const radioClick = async (e) => {
    setVal(e.target.value);
    let cityname = router.query.Name;
    let sortquery = e.target.value;
    router.replace({
      pathname: location.pathname,
      query: { Name: cityname, sort: sortquery },
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const Sort = val;
      const Area = location.pathname.slice(1);
      await axios
        .get(`//${location.host}/api/get`, {
          params: { id: Area, sort: Sort },
        })
        .then((res) => {
          setData(res.data.props.processedData);
        })
        .then()
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
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
      <Flex>
        <Text fontWeight="semibold" mr={21}>
          値段
        </Text>
        <RadioGroup onChange={setVal} value={val} defaultChecked="0">
          <Stack direction="row">
            <Radio value="0" colorScheme="green" onChange={radioClick}>
              選択なし
            </Radio>
            <Radio value="50000" colorScheme="green" onChange={radioClick}>
              ¥50,000以下
            </Radio>
            <Radio value="100000" colorScheme="green" onChange={radioClick}>
              ¥100,000以下
            </Radio>
            <Radio value="150000" colorScheme="green" onChange={radioClick}>
              ¥150,000以下
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      {/* {Object.keys(datas).map((time) => {
        return console.log(datas[time]);
      })} */}
      {Object.keys(datas).map((time) => {
        return (
          <Box key={time} my={2}>
            <HomeGroup walktime={time} posts={datas[time]} />
          </Box>
        );
      })}
    </>
  );
}
