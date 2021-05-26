import { Badge, Box, Text } from "@chakra-ui/layout";
import { VFC } from "react";

type Badge = {
  title: string;
  value: string;
};

export const FeatureBadge: VFC<Badge> = (props) => {
  return (
    <Box width="100%" borderRadius="lg">
      <Badge
        fontSize="md"
        borderRadius="md"
        fontWeight="semibold"
        bg="green.400"
        color="white"
        shadow="md"
      >
        {props.title}
      </Badge>
      <Text fontWeight="semibold" my={1} textAlign="center">
        {props.value}
      </Text>
    </Box>
  );
};
