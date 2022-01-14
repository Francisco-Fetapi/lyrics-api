import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../store/App.selectors";
import { SET_STATE } from "../store/App.actions";

function useLyrics() {
  const { lyric } = useSelector(selectAll);
  const Dispatch = useDispatch();

  const dados = {
    lyric,
    buscar({ artista, titulo }, actions, LoadingLinear) {
      if (!artista) {
        actions.setErrors({ artista: "Este campo não pode estar vazio" });
      } else if (!titulo) {
        actions.setErrors({ titulo: "Este campo não pode estar vazio" });
      } else {
        LoadingLinear.mostrar();
        setTimeout(() => {
          Dispatch(SET_STATE("lyric", "Ola Mundo...Tudo bem"));
          LoadingLinear.ocultar();
        }, 2000);
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
