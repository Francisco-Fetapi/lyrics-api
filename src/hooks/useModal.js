import { useState, useCallback } from "react";

export default function useModal() {
  const [modal, setModal] = useState(false);

  const abrir = useCallback(() => setModal(true), []);
  const fechar = useCallback((e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    setModal(false);
  }, []);

  return [modal, abrir, fechar, setModal];
}
