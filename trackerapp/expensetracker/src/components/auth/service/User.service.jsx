import axios from 'axios';
import authenticationHeader from './AuthenticationHeader';

class UserService {

  getExpenses(year, month) {
  const API_URL = 'http://localhost:8080/api/expense/'+year+'/'+month;
    return axios.get(API_URL, { headers: authenticationHeader() });
  }
}

export default new UserService();
