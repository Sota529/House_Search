import { Box, Text } from "@chakra-ui/layout";
import type { VFC } from "react";

type PriceType = {
  price: number;
  size: string;
};
export const Price: VFC<PriceType> = ({ price, size }) => {
  const StringPrice = String(price);
  return (
    <>
      {StringPrice.length === 5 ? (
        <Text>
          <Box fontWeight={"semibold"} display="inline" fontSize={size}>
            {StringPrice.slice(0, 1)}
          </Box>
          .<Box as="span">{StringPrice.slice(1, 2)}</Box>
          万円
        </Text>
      ) : StringPrice.length === 6 ? (
        <Text>
          <Box fontWeight={"semibold"} display="inline" fontSize={size}>
            {StringPrice.slice(0, 1)}
            {StringPrice.slice(1, 2)}
          </Box>
          .{StringPrice.slice(2, 3)}万円
        </Text>
      ) : (
        "???円"
      )}
    </>
  );
};
