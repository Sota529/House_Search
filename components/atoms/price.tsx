import { Box, Text } from "@chakra-ui/layout";
import type {  VFC } from "react";

type PriceType = {
  price: number;
  size: string;
};
export const Price: VFC<PriceType> = ({ price, size }) => {
  const StringPrice = String(price);
  let First: string, Second: string;
  let result: any;
  if (StringPrice.length === 5) {
    First = StringPrice.slice(0, 1);
    Second = StringPrice.slice(1, 2);
    result = (
      <Text>
        <Box fontWeight={"semibold"} display="inline" fontSize={size}>
          {First}
        </Box>
        .<Box as="span">{Second}</Box>
        万円
      </Text>
    );
  } else if (StringPrice.length === 6) {
    First = StringPrice.slice(0, 1);
    Second = StringPrice.slice(1, 2);
    const Third = StringPrice.slice(2, 3);
    result = (
      <Text>
        <Box fontWeight={"semibold"} display="inline" fontSize={size}>
          {First}
          {Second}
        </Box>
        .{Third}万円
      </Text>
    );
  }
  return <>{result} </>;
};
