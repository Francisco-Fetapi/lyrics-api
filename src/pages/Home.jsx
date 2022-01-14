import React from "react";
import CampoParaLegenda from "../components/CampoParaLegenda";
import FormProcurarMusica from "../components/Forms/FormProcurarMusica";
import Titulo from "../components/Titulo";
import { Home } from "../styles";

export default function HomePage() {
  return (
    <Home.Container>
      <Titulo />
      <FormProcurarMusica />
      <CampoParaLegenda />
    </Home.Container>
  );
}
