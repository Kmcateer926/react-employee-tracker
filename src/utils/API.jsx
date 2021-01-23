import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/?results=20&nat=us';
export default {
  // Retrieve 20 random users
  search: function(query) {
    return axios.get(BASEURL + query);
  },
};