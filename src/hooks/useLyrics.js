function useLyrics() {
  const funcoes = {
    buscar({ artista, titulo }, actions, LoadingLinear) {
      if (!artista) {
        actions.setErrors({ artista: "Este campo não pode estar vazio" });
      } else if (!titulo) {
        actions.setErrors({ titulo: "Este campo não pode estar vazio" });
      } else {
        LoadingLinear.mostrar();
        setTimeout(() => {
          LoadingLinear.ocultar();
        }, 2000);
      }
    },
  };

  return funcoes;
}

export default useLyrics;
