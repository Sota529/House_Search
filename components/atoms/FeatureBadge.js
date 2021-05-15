import { Badge, Box } from "@chakra-ui/layout";

const FeatureBadge = ({ title }) => {
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
        {title}
      </Badge>
    </Box>
  );
};

export default FeatureBadge;
