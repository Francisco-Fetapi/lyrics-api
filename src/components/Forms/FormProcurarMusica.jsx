import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Home } from "../../styles";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

import { Formik, Form } from "formik";
import TextField from "../TextField";
import useLyrics from "../../hooks/useLyrics";
import useLinearProgress from "../../hooks/useLinearProgress";

import LinearProgress from "../Progress/Linear";

export default function FormProcurarMusica() {
  const { buscar, lyric, limpar } = useLyrics();
  const LoadingLinear = useLinearProgress();
  return (
    <Box mt={3}>
      <LinearProgress aberto={LoadingLinear.loading} />
      <Formik
        initialValues={{
          artista: "",
          titulo: "",
        }}
        onSubmit={(values, actions) => buscar(values, actions, LoadingLinear)}
      >
        {(actions) => (
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
              <Button type="submit" variant="contained" color="primary">
                Pesquisar
              </Button>
              {lyric && (
                <Box ml={2}>
                  <Button
                    onClick={() => limpar(actions)}
                    variant="outlined"
                    color="default"
                  >
                    Limpar tudo
                  </Button>
                </Box>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
