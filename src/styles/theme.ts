import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    headings: {
      dark: "#47585B",
      light: "#F5F8FA",
    },
    text: {
      dark: "#47585B",
      light: "#F5F8FA",
    },
    info: {
      dark: "#999999",
      light: "#DADADA",
    },
  },
  styles: {
    global: {
      body: {
        bg: "text.light",
        marginTop: "55",
      },
      button: {
        cursor: "pointer",
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});
