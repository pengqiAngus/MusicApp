import axios from "axios";

const baseURL = "/";
axios.defaults.baseURL = baseURL;

export function get(url, params) {
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      const serverData = res.data;
      console.log(serverData);
      if (serverData.code === 0) {
        return serverData.result;
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
