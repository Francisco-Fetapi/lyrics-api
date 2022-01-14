import axios from "axios";

const lyrics = axios.create({
  baseURL: "https://api.lyrics.ovh/v1",
});

const api = {
  async getLegenda(artista, titulo) {
    const res = await lyrics.get(artista + "/" + titulo);
    return res;
  },
};

export default api;
