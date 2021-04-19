import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=name,location,email,&&results=";
// const COUNT = "20";

export default {
  populate: function (query) {
    return axios.get(BASEURL + query);
  },
};
