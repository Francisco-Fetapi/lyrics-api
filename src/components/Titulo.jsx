import React from "react";
import Box from "@material-ui/core/Box";
import { Text, Home } from "../styles";
import LibraryMusic from "@material-ui/icons/LibraryMusic";

export default function Titulo() {
  return (
    <Box>
      <Home.Logo my={2}>
        <LibraryMusic />
      </Home.Logo>
      <Text align="center" variant="h4">
        Lyrics++
      </Text>
      <Text color="textSecondary" align="center" variant="subtitle2">
        Pesquise, leia e traduza suas músicas favoritas
      </Text>
    </Box>
  );
}
