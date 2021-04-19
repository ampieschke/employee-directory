import axios from "axios";
const BASEURL =
  "https://randomuser.me/api/?inc=name,location,email,nat&&results=";
const COUNT = "20";

export default {
  search: function () {
    return axios.get(BASEURL + COUNT);
  },
};
