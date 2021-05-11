import axios from "axios"

const api = axios.create({
    baseURL: "https://marvel-heroes-chars.herokuapp.com/"
});

export default api;