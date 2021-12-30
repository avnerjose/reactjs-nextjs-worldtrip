import type { NextPage } from "next";
import { Divider, Flex, Heading, Stack } from "@chakra-ui/react";

import { CategoryList } from "../components/CategoryList";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { HomeSwiper } from "../components/HomeSwiper";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Continent {
  id: number;
  uuid: string;
  name: string;
  description: string;
  images: {
    slider: string;
  };
}

const Home: NextPage = () => {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api
      .get<{ continents: Continent[] }>("/continents")
      .then(({ data: { continents } }) => setContinents(continents));
  }, []);

  return (
    <>
      <Header />
      <HomeBanner />
      <Flex
        as="section"
        maxW={1480}
        direction="column"
        mx="auto"
        align="center"
        justify="center"
        py={["15", "50"]}
      >
        <Stack spacing={["10", "20"]} w="100%" align="center">
          <CategoryList />
          <Divider w={100} borderColor="text.dark" mx="auto" borderWidth={1} />
          <Heading
            color="text.dark"
            fontWeight="medium"
            fontSize={["2xl", "3xl"]}
            textAlign="center"
            lineHeight="10"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>
          <HomeSwiper data={continents} />
        </Stack>
      </Flex>
    </>
  );
};

export default Home;
