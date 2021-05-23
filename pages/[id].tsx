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
import axios, { AxiosResponse } from "axios";
import HomeGroup from "../components/molecules/HomeGroup.jsx";
import { NextPage } from "next";

const Id: NextPage = () => {
  const router = useRouter();
  const [datas, setData] = useState<Object>({});
  const [val, setVal] = useState<any>("0");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const Sort = val;
    const Area = location.pathname.slice(1);
    axios
      .get(`//${location.host}/api/get`, {
        params: { id: Area, sort: Sort },
      })
      .then((res: AxiosResponse<any>) => {
        const result = res.data.props.processedData;
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <RadioGroup onChange={setVal} value={val} defaultChecked={val}>
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
                <HomeGroup walktime={time} posts={datas[time]} />
              </Box>
            );
          })}
        </>
      )}
    </>
  );
};

export default Id;
