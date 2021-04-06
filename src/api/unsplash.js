import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6tpRnDWQN38c7JkWBWmaTAvK5XTcAewPfWJ_3YqAItE",
  },
});
