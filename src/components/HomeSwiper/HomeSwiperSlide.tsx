import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface HomeSwiperSlideProps {
  image: string;
  title: string;
  subtitle: string;
  slug: string;
}

export function HomeSwiperSlide({
  image,
  title,
  subtitle,
  slug,
}: HomeSwiperSlideProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      bgImage={`url('${image}')`}
      bgRepeat="no-repeat"
      bgSize="cover"
      direction="column"
      align="center"
      justify="center"
    >
      <Stack spacing={["2", "10"]}>
        <Link href={`/continent/${slug}`} passHref>
          <Button
            as="a"
            variant="unstyled"
            color="headings.light"
            _hover={{ textDecoration: "underline" }}
            transition={"2s"}
          >
            <Heading
              color="headings.light"
              fontSize={["3xl", "6xl"]}
              fontWeight="bold"
              textAlign="center"
            >
              {title}
            </Heading>
          </Button>
        </Link>
        <Text
          color="info.light"
          fontSize={["md", "3xl"]}
          fontWeight="bold"
          textAlign="center"
        >
          {subtitle}
        </Text>
      </Stack>
    </Flex>
  );
}
