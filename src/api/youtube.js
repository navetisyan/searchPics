import axios from "axios";

const KEY = "AIzaSyBU7BSpulTkXQGvrxSrV0cl_kQN3miIzWk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxRssult: 5,
    type: "video",
    key: KEY,
  },
});
