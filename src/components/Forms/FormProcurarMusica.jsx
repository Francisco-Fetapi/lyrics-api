import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Home } from "../../styles";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

import { Formik, Form } from "formik";
import TextField from "../TextField";

export default function FormProcurarMusica() {
  return (
    <Box mt={3}>
      <Formik
        initialValues={{
          artista: "",
          titulo: "",
        }}
      >
        <Form>
          <Home.FormProcuarMusica>
            <Box>
              <TextField
                label="Artista"
                id="artista"
                icon={<AccountCircleIcon />}
              />
            </Box>
            <Box>
              <TextField
                label="Titulo da música"
                id="titulo"
                icon={<QueueMusicIcon />}
              />
            </Box>
          </Home.FormProcuarMusica>
          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" color="primary">
              Pesquisar
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}
