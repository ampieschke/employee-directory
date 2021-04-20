import axios from "axios";
const BASEURL =
  "https://randomuser.me/api/?inc=name,location,email,&&results=5";
// const COUNT = "20";

export default {
  populate: function () {
    return axios.get(BASEURL);
  },
};
