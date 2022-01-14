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
          Dispatch(SET_STATE("lyric", res.data.lyrics));
        } catch (err) {
          alertar("ocorreu algum problema ao pesquisar", "error", 3);
          console.log(err);
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
