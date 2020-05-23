export default function authenticationHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    console.log(user.accessToken)
     return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
  } else {
    return {};
  }
}