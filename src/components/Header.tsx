import { Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h="55"
      position="fixed"
      inset="0 0 0 0"
      bg="text.light"
      zIndex="2"
    >
      <Flex align="center" justify="center" maxW={1480} w="100%" pos="relative">
        {asPath !== "/" && (
          <Link href="/" passHref>
            <IconButton
              variant="unstyled"
              aria-label="Back to home screen"
              as={RiArrowLeftSLine}
              color="text.dark"
              fontSize="2xl"
              pos="absolute"
              left="4"
              cursor="pointer"
            />
          </Link>
        )}
        <Image src="/logo.svg" width={120} height={50} />
      </Flex>
    </Flex>
  );
}
