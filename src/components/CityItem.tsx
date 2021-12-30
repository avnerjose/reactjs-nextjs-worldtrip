import { Flex, GridItem, Image, Stack, Text } from "@chakra-ui/react";

interface City {
  id: string;
  name: string;
  country: string;
  images: {
    main: string;
    flag: string;
  };
}

interface CityItemProps {
  city: City;
}

export function CityItem({
  city: {
    country,
    name,
    images: { main, flag },
  },
}: CityItemProps) {
  return (
    <GridItem w="100%" bg="white" boxShadow="xl">
      <Image
        src={main}
        alt={name}
        h="40"
        w="100%"
        objectFit="cover"
        objectPosition="0 70%"
      />
      <Flex align="center" justify="space-between" p="4">
        <Stack>
          <Text color="text.dark" fontWeight="semibold" fontSize="md">
            {name}
          </Text>
          <Text color="info.dark" fontSize="sm">
            {country}
          </Text>
        </Stack>
        <Image src={flag} alt={country} h="30px" w="30px" />
      </Flex>
    </GridItem>
  );
}
