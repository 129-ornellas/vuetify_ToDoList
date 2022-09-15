import axios from "axios";

export default {
  // criação de usuário na API
  createUser: (createUser, callback) => {
    axios.post("http://localhost:3000/user", createUser).then((response) => {
      callback(response.data);
      // entender pq o callback tá dando erro
    });
  },
  // confirma se o email do usuário é válido
  checkEmail: (callback) => {
    console.log("chegou na checkemail conexao");
    axios(`http://localhost:3000/user/`).then((response) => {
      console.log(response.data);
      callback(response.data);
    });
  },
};
