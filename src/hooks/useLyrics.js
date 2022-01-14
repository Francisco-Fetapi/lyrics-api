import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";
import { SET_STATE } from "../store/App.actions";

import API from "../API";

function useLyrics() {
  const { lyric } = useSelector(selectAll);
  const Dispatch = useDispatch();

  const dados = {
    lyric,
    async buscar({ artista, titulo }, actions, LoadingLinear, alertar) {
      if (!artista) {
        actions.setErrors({ artista: "Este campo não pode estar vazio" });
      } else if (!titulo) {
        actions.setErrors({ titulo: "Este campo não pode estar vazio" });
      } else {
        LoadingLinear.mostrar();
        try {
          let res = await API.getLegenda(artista, titulo);
          if (res.data.lyrics) {
            Dispatch(SET_STATE("lyric", res.data.lyrics));
          }
        } catch (err) {
          const erro = err.toString();
          if (erro.includes("DISCONNECTED")) {
            alertar("Falha na rede", "error", 3);
          } else if (erro.includes("404")) {
            alertar("Música não encontrada.", "error", 4);
          }
        }
        LoadingLinear.ocultar();
      }
    },
    limpar(actions) {
      Dispatch(SET_STATE("lyric", ""));
      actions.handleReset();
    },
  };

  return dados;
}

export default useLyrics;
