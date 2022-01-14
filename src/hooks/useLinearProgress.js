import { useState } from "react";

export default function useLinearProgress() {
  const [loading, setLoading] = useState(false);

  const funcoes = {
    mostrar() {
      setLoading(true);
    },
    ocultar() {
      setLoading(false);
    },
  };

  return { loading, ...funcoes };
}
