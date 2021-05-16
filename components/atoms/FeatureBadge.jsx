import { Badge, Box, Text } from "@chakra-ui/layout";

const FeatureBadge = (props) => {
  return (
    <Box width="100%" borderWidth="" borderRadius="lg">
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

export default FeatureBadge;
