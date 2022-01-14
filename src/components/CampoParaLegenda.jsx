import React from "react";
// import Box from "@material-ui/core/Box";
import { Text, Home } from "../styles";
import useLyrics from "../hooks/useLyrics";

export default function CampoParaLegenda() {
  const { lyric } = useLyrics();

  return (
    <Home.CampoParaLegenda className={lyric ? "active" : ""}>
      <pre>
        <Text>{lyric || "Limpando..."}</Text>
      </pre>
    </Home.CampoParaLegenda>
  );
}
