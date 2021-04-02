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
  const [datas, setData] = useState({});
  const [val, setVal] = useState("0");

  const processData = (datas) => {
    let processedData = {};
    let data5 = [];
    let data10 = [];
    let data15 = [];
    let data20 = [];
    let data25 = [];
    datas.map(({ time, ...others }) => {
      if (time === 5) {
        data5.push(others);
      } else if (time === 10) {
        data10.push(others);
      } else if (time === 15) {
        data15.push(others);
      } else if (time === 20) {
        data20.push(others);
      } else if (time === 25) {
        data25.push(others);
      }
    });
    processedData = {
      5: data5,
      10: data10,
      15: data15,
      20: data20,
      25: data25,
    };
    setData(processedData);
  };

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
    let unmounted = false;
    (async () => {
      const Sort = val;
      const Area = location.pathname.slice(1);
      console.log(`///api/get`)
      await axios
        .get(`//${location.host}/api/get`, {
          params: { id: Area, sort: Sort },
        })
        .then((res) => {
          const result = res.data.props.datas;
          if (!unmounted) {
            processData(result);
          }
        })
        .then(console.log(datas))
        .catch((error) => {
          console.log(error);
        });
    })();
    return () => {
      unmounted = true;
    };
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
