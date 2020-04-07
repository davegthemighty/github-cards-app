import axios from 'axios';

class APIHandler {

  findUser = async (username) => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
  }
}

export default APIHandler;
