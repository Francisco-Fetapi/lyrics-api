import React from "react";
import FormProcurarMusica from "../components/Forms/FormProcurarMusica";
import Titulo from "../components/Titulo";
import { Home } from "../styles";

export default function HomePage() {
  return (
    <Home.Container>
      <Titulo />
      <FormProcurarMusica />
    </Home.Container>
  );
}
