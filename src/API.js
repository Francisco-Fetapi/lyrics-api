import axios from "axios";

const lyrics = axios.create({
  baseURL: "https://api.lyrics.ovh/v1",
});

const api = {
  async getLegenda(artista, titulo) {
    const { data } = await lyrics.get(artista + "/" + titulo);
    return data;
  },
};

export default api;
