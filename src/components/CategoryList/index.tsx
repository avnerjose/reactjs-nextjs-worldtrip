import { Stack } from "@chakra-ui/react";
import { CategoryItem } from "./CategoryItem";

const categories = [
  { name: "Vida noturna", src: "/icons/cocktail.svg" },
  {
    name: "praia",
    src: "/icons/surf.svg",
  },
  { name: "moderno", src: "/icons/building.svg" },
  { name: "clássico", src: "/icons/museum.svg" },
  { name: "e mais...", src: "/icons/earth.svg" },
];

export function CategoryList() {
  return (
    <Stack direction={["column", "row"]} spacing="auto" w="80%">
      {categories.map(({ name, src }) => (
        <CategoryItem key={name} name={name} src={src} />
      ))}
    </Stack>
  );
}
