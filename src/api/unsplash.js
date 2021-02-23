import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID b8njB35N-5uQscTYVAQwvT3yKO_ZdoN8J8ko2NfEfjc",
  },
});
