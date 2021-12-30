import { Continent } from "../models";

export const continents: Omit<Continent, "cityIds">[] = [
  {
    uuid: "europe",
    name: "Europa",
    statistics: {
      cities: 27,
      languages: 60,
      countries: 50,
    },
    description: "O continente mais antigo",
    full_description:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    images: {
      banner: "/europe/london.jpg",
      slider: "/europe/europe.svg",
    },
    cities: [
      {
        name: "Londres",
        country: "Reino Unido",
        images: {
          main: "/europe/london.jpg",
          flag: "/flags/united-kingdom.svg",
        },
      },
      {
        name: "Roma",
        country: "Itália",
        images: {
          main: "/europe/roma.jpg",
          flag: "/flags/italy.svg",
        },
      },
      {
        name: "Barcelona",
        country: "Espanha",
        images: {
          main: "/europe/barcelona.jpg",
          flag: "/flags/spain.svg",
        },
      },
      {
        name: "París",
        country: "França",
        images: {
          main: "/europe/paris.jpg",
          flag: "/flags/france.svg",
        },
      },
      {
        name: "Berlim",
        country: "Alemanha",
        images: {
          main: "/europe/berlim.jpg",
          flag: "/flags/germany.svg",
        },
      },
    ],
  },
  {
    uuid: "south-america",
    name: "América do Sul",
    description: "O continente mais diversificado",
    full_description:
      "A América do Sul é um subcontinente que envolve a parcela meridional da América (continente americano). Quatro quintos do continente ficam abaixo da Linha do Equador, sendo que a América do Sul é banhada pelo mar do Caribe, oceano Atlântico e oceano Pacífico.",
    images: {
      banner: "/south-america/south-america.svg",
      slider: "/south-america/rio_de_janeiro.jpg",
    },
    statistics: {
      countries: 13,
      cities: 8,
      languages: 10,
    },
    cities: [
      {
        name: "Buenos Aires",
        country: "Argentina",
        images: {
          main: "/south-america/buenos_aires.jpg",
          flag: "/flags/argentina.svg",
        },
      },
      {
        name: "Machu Picchu",
        country: "Peru",
        images: {
          main: "/south-america/machupichu.jpg",
          flag: "/flags/peru.svg",
        },
      },
      {
        name: "Montevideu",
        country: "Uruguai",
        images: {
          main: "/south-america/montevideu.jpg",
          flag: "/flags/uruguay.png",
        },
      },
      {
        name: "Rio de Janeiro",
        country: "Brasil",
        images: {
          main: "/south-america/rio_de_janeiro.jpg",
          flag: "/flags/brazil.png",
        },
      },
    ],
  },
  {
    uuid: "north-america",
    name: "América do Norte",
    description: "Venha conhecer o sonho Americano.",
    full_description:
      "A América do Norte abrange a porção setentrional do continente americano, apesar desse “subcontinente” estar firmado em sua própria placa tectônica. O subcontinente da América do Norte compreende o Canadá, México, Groenlândia e os Estados Unidos da América (EUA).",
    images: {
      banner: "/north-america/new-york.jpg",
      slider: "/north-america/north-america.svg",
    },
    statistics: {
      countries: 3,
      cities: 7,
      languages: 4,
    },
    cities: [
      {
        name: "Los Angeles",
        country: "Estados Unidos",
        images: {
          main: "/north-america/losangeles.jpeg",
          flag: "/flags/usa.svg",
        },
      },
      {
        name: "Montreal",
        country: "Canadá",
        images: {
          main: "/north-america/montreal.jpg",
          flag: "/flags/canada.svg",
        },
      },
      {
        name: "Nova York",
        country: "Estados Unidos",
        images: {
          main: "/north-america/new-york.jpg",
          flag: "/flags/usa.svg",
        },
      },
      {
        name: "Toronto",
        country: "Canadá",
        images: {
          main: "/north-america/toronto.jpg",
          flag: "/flags/canada.svg",
        },
      },
    ],
  },
  {
    uuid: "asia",
    name: "Ásia",
    description: "A cultura asiática é uma das mais belas do mundo.",
    full_description:
      "A Ásia é o maior continente, tanto em área (chega a quase um terço de todas as terras emersas do nosso planeta) como em população, onde habitam aproximadamente 4,5 bilhões de habitantes.",
    images: {
      banner: "/asia/toquio.jpg",
      slider: "/asia/asia.jpg",
    },
    statistics: {
      countries: 49,
      cities: 43,
      languages: 8,
    },
    cities: [
      {
        name: "Dubai",
        country: "Emirados Árabes Unidos",
        images: {
          main: "/asia/dubai.jpg",
          flag: "/flags/united-arab-emirates.svg",
        },
      },
      {
        name: "Tóquio",
        country: "Japão",
        images: {
          main: "/asia/toquio.jpg",
          flag: "/flags/japan.svg",
        },
      },
    ],
  },
  {
    uuid: "africa",
    name: "África",
    description: "A África é ainda mais linda de perto.",
    full_description:
      "Apesar de concentrar incontáveis riquezas naturais, o continente africano é um dos mais pobres do mundo.",
    images: {
      banner: "/africa/africa-city.jpg",
      slider: "/africa/africa.svg",
    },
    statistics: {
      countries: 54,
      cities: 6,
      languages: 209,
    },
    cities: [
      {
        name: "Duala",
        country: "Camarões",
        images: {
          main: "/africa/duala.jpeg",
          flag: "/flags/cameroon.svg",
        },
      },
      {
        name: "Orão",
        country: "Argélia",
        images: {
          main: "/africa/orao.jpeg",
          flag: "/flags/algeria.svg",
        },
      },
    ],
  },
  {
    uuid: "oceania",
    name: "Oceania",
    description: "A oceania é inigualável.",
    full_description:
      "A Oceania é o menor continente do mundo. Localizado no hemisfério sul, é composto pela Austrália e pelas Ilhas do Pacífico.",
    images: {
      banner: "/oceania/oceania.svg",
      slider: "/oceania/oceania.svg",
    },
    statistics: {
      countries: 14,
      cities: 6,
      languages: 147,
    },
    cities: [
      {
        name: "Sydney",
        country: "Austrália",
        images: {
          main: "/oceania/sydney.jpeg",
          flag: "/flags/australia.svg",
        },
      },
      {
        name: "Melbourne",
        country: "Austrália",
        images: {
          main: "/oceania/melbourne.png",
          flag: "/flags/australia.svg",
        },
      },
    ],
  },
];
