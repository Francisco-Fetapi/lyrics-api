export function SET_STATE(nome, value) {
  return {
    payload: { nome, value },
    type: "SET_STATE",
  };
}
export function SET_STATE_USER(nome, value) {
  return {
    payload: { nome, value },
    type: "SET_STATE_USER",
  };
}
