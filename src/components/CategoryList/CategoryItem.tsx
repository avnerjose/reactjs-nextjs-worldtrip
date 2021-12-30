import { Flex, Text, Circle, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

interface CategoryItemProps {
  name: string;
  src: string;
}

export function CategoryItem({ name, src }: CategoryItemProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isDesktop ? (
        <Image src={src} width={80} height={80} />
      ) : (
        <Circle size="8px" bg="highlight" mr="2" />
      )}
      <Text
        mt={["0", "2"]}
        fontWeight="medium"
        color="text.dark"
        textTransform="capitalize"
      >
        {name}
      </Text>
    </Flex>
  );
}
