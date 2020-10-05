import axios from 'axios';

class AuthService {
  authenticate(username, password) {
    // let jwt = '';
    return axios.post('http://localhost:8080/auth', { username, password });
    // .then((response) => {
    //   jwt = response.data.jwt;
    //   console.log(jwt);
    //   this.registerSuccesfulLogin(username, jwt);
    // })
    // .catch((error) => console.log(error));
  }

  registerSuccessfulLogin(username, jwt) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('jwt', jwt);
    this.setupAxiosInterceptors(this.createJWTToken(jwt));
  }

  isUserLoggedIn() {
    let username = sessionStorage.getItem('username');
    if (username === null) return false;
    return true;
  }

  createJWTToken(token) {
    return 'Bearer ' + token;
  }

  logout() {
    sessionStorage.removeItem('username');
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}
export default new AuthService();
