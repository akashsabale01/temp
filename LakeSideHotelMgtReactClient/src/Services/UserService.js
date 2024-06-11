import axios from 'axios';
import AuthService from './AuthService';

const API_URL = 'https://localhost:7136/api/Users'; // Adjust the URL as necessary

class UserService {
  getHeaders() {
    const token = AuthService.getToken();
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  getUserInfoById(id) {
    return axios.get(`${API_URL}/${id}`, this.getHeaders());
  }

}

const userServiceInstance = new UserService();

export default userServiceInstance;
