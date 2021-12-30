import {
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CityItem } from "../../components/CityItem";
import { Header } from "../../components/Header";
import { StatisticsItem } from "../../components/StatisticsItem";
import { api } from "../../services/api";

interface City {
  id: string;
  name: string;
  country: string;
  images: {
    main: string;
    flag: string;
  };
}

interface Continent {
  name: string;
  full_description: string;
  images: {
    banner: string;
  };
  statistics: {
    cities: number;
    languages: number;
    countries: number;
  };
  cities?: City[];
}

const ContinentPage: NextPage = () => {
  const [continent, setContinent] = useState<Continent>();
  const router = useRouter();
  const { slug } = router.query;

  async function loadData() {
    await api
      .get<{ continent: Continent }>(`/continents/${slug}`)
      .then(({ data: { continent } }) => {
        setContinent(continent);
      });
  }

  useEffect(() => {
    if (!!slug) {
      loadData();
    }
  }, [slug]);

  return (
    <>
      <Header />
      <Flex
        bgImage={`url('${continent?.images.banner}')`}
        w="100vw"
        h={["300px", "500px"]}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="0 70%"
      >
        <Flex w="100%" maxW={1480} justify="flex-start" align="flex-end" p="14">
          <Heading color="headings.light">{continent?.name}</Heading>
        </Flex>
      </Flex>
      <Flex
        as="section"
        w="100%"
        maxW={1480}
        justify="center"
        align="center"
        px={["16px", "32px", "140px"]}
        pt={["30px", "80px"]}
        mx="auto"
      >
        <SimpleGrid minChildWidth={320}>
          <Text color="text.dark" fontSize="md" lineHeight="6">
            {continent?.full_description}
          </Text>
          <HStack spacing="auto" w="80%" mx="auto">
            <StatisticsItem
              name="Países"
              value={continent?.statistics.countries}
            />
            <StatisticsItem
              name="Línguas"
              value={continent?.statistics.languages}
            />
            <StatisticsItem
              name="Cidades +100"
              value={continent?.statistics.cities}
            />
          </HStack>
        </SimpleGrid>
      </Flex>
      <Flex
        as="section"
        direction="column"
        w="100%"
        maxW={1480}
        px={["16px", "32px", "140px"]}
        pt="80px"
        mx="auto"
      >
        <Heading color="headings.dark" fontWeight="medium">
          Cidades + 100
        </Heading>
        <Grid
          templateColumns={[
            "1fr",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
          ]}
          gap={6}
          my={["5", "20"]}
        >
          {continent?.cities?.map((city) => (
            <CityItem city={city} />
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default ContinentPage;
