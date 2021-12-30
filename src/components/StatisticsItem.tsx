import { Flex, Text } from "@chakra-ui/react";

interface StatisticsItemProps {
  name: string;
  value: number | undefined;
}

export function StatisticsItem({ name, value }: StatisticsItemProps) {
  return (
    <Flex direction="column" align="center" justify="center">
      <Text color="highlight" fontWeight="bold" fontSize="xx-large">
        {value}
      </Text>
      <Text
        color="text.dark"
        fontWeight="semibold"
        fontSize="md"
        textTransform="capitalize"
      >
        {name}
      </Text>
    </Flex>
  );
}
