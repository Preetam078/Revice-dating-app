import axios from "axios";

const instance = axios.create({
  baseURL: "https://datingapp-backend1.herokuapp.com/",
});

export default instance;
