import { Box, Text } from "@chakra-ui/layout";

export const Price = (price) => {
  console.log(price);
  const StringPrice = String(price.price);
  let First;
  let Second;
  let result;
  if (StringPrice.length === 5) {
    First = StringPrice.slice(0, 1);
    Second = StringPrice.slice(1, 2);
    result = (
      <Text>
        <Box fontWeight={"semibold"} display="inline" fontSize={"24px"}>
          {First}
        </Box>
        .{Second}万円
      </Text>
    );
  } else if (StringPrice.length === 6) {
    First = StringPrice.slice(0, 1);
    Second = StringPrice.slice(1, 2);
    const Third = StringPrice.slice(2, 3);
    result = (
      <Text>
        <Box fontWeight={"semibold"} display="inline" fontSize={"24px"}>
          {First}
          {Second}
        </Box>
        .{Third}万円
      </Text>
    );
  }
  return <>{result} </>;
};
