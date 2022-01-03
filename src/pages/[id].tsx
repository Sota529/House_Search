import {
  Heading,
  Box,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Center,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { HomeGroup } from "../components/molecules/HomeGroup";
import { NextPage } from "next";
import { HouseInfoType } from "src/type";

interface Response {
  data: { [time: number]: HouseInfoType[] };
}

const Id: NextPage = () => {
  const router = useRouter();
  const [datas, setData] = useState<{ [time: number]: HouseInfoType[] }>({});
  const [val, setVal] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<Response>(`//${location.host}/api/get`, {
        params: { id: location.pathname.slice(1), sort: val },
      });
      setData(res.data.data);
      setLoading(false);
    };
    fetchData();
  }, [val]);

  return (
    <>
      <Head>
        <title>おうちさがし</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Center>
          <Spinner size="xl" thickness="3px" />
        </Center>
      ) : (
        <>
          <Heading align="center" isTruncated mb={6}>
            {router.query.Name}大学
          </Heading>
          <Text fontWeight="semibold" mr={21}>
            値段
          </Text>
          {/* @ts-ignore */}
          <RadioGroup onChange={setVal} value={val}>
            <Stack direction="row">
              <Radio value="0" colorScheme="green">
                選択なし
              </Radio>
              <Radio value="50000" colorScheme="green">
                ¥50,000以下
              </Radio>
              <Radio value="100000" colorScheme="green">
                ¥100,000以下
              </Radio>
              <Radio value="150000" colorScheme="green">
                ¥150,000以下
              </Radio>
            </Stack>
          </RadioGroup>
          {Object.keys(datas).map((time) => {
            return (
              <Box key={time} m="1em 0 2em">
                <HomeGroup walktime={time} posts={datas[Number(time)]} />
              </Box>
            );
          })}
        </>
      )}
    </>
  );
};

export default Id;
