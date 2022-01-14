export function SET_STATE(nome, value) {
  return {
    payload: { nome, value },
    type: "SET_STATE",
  };
}
