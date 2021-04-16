import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=name,location,email,nat&&";
const COUNTER = "results=";
const COUNT = "20";

export default {
  search: function (query) {
    return axios.get(BASEURL + COUNTER + COUNT);
  },
};
