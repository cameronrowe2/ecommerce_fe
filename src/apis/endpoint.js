import axios from "axios";

export default axios.create({
  baseURL: "http://api.api",
  withCredentials: true
  // headers: {
  //   "Access-Control-Allow-Credentials": true,
  //   "Access-Control-Allow-Origin": "http://api.api"
  // }
});
