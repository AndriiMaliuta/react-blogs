import axios from 'axios';

class AuthService {
  authenticate(username, password) {
    let jwt = '';
    axios
      .post('http://localhost:8080/auth', { username, password })
      .then((response) => {
        jwt = response.data.jwt;
        console.log(jwt);
        this.registerSuccesfulLogin(username, password);
        localStorage.setItem('jwt', jwt);
      })
      .catch((error) => console.log(error));
  }

  registerSuccesfulLogin(username, token) {
    sessionStorage.setItem('username', username);
  }

  isuserLoggedIn() {
    let username = sessionStorage.getItem('username');
    if (username === null) return false;
    return true;
  }
}
export default new AuthService();
