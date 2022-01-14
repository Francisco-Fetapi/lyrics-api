import { useState } from "react";

export default function useAlert() {
  const initialState = {
    open: false,
    msg: "",
    status: "",
    tempo: 0,
  };
  const [alert, setAlert] = useState(initialState);

  const dados = {
    alert,
    alertar(msg, status, tempo) {
      setAlert({ open: true, msg, status, tempo });
    },
    fechar() {
      console.log(alert);
      setAlert({ ...alert, open: false });
    },
  };

  return dados;
}
