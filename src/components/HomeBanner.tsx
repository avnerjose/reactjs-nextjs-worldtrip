import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/react";

export function HomeBanner() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bgImage="url('/homeBanner.jpg')"
      bgPos="0 30%"
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100vw"
    >
      <Flex
        maxW={1480}
        w="100%"
        mx="auto"
        px={["5", "20"]}
        py="10"
        pos="relative"
      >
        <Stack>
          <Heading color="headings.light" fontSize="3xl" fontWeight="medium">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color="info.light" fontSize="md">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Stack>
        {isDesktop && (
          <Box bottom="-10" right="0" pos="absolute" width={400} height={200}>
            <Image src="/airplane.svg" layout="fill" />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
