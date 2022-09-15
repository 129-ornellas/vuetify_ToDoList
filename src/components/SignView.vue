<template>
  <div class="flexx">
    <h1>Gelo Account</h1>
    <div>
      <v-form class="form d-flex justify-center mb-6" ref="form">
        <!-- v-model="valid" -->
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="passWord"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="success" class="mr-4" @click="saveUser">
        Criar Cadastro
      </v-btn>
    </div>
  </div>
</template>

<script>
import conexao_db from "../conexao_db.js";
export default {
  data: () => ({
    User: [],
    name: "",
    email: "",
    passWord: "",
    id: "0",
    nameRules: [(v) => !!v || "Informe seu nome"],
    emailRules: [
      (v) => !!v || "Informe seu e-mail",
      (v) => /.+@.+\..+/.test(v) || "O email precisa ser válido.",
    ],
    passwordRules: [
      (v) => !!v || "Informe sua senha",
      (v) => /....../.test(v) || "Sua senha precisa de mais de 6 caracteres.",
    ],
  }),

  methods: {
    saveUser() {
      // construir condicional para nao armazenar users vazios!
      // construir condicional para nao armazenar usuários com mesmo email
      const newUser = {
        name: this.name,
        email: this.email,
        passWord: this.passWord,
      };
      conexao_db.createUser(newUser);
      this.includeUser();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.flexx {
  display: flex;
  /* align-items: center; */
  /* width: 100%; */
  /* height: 100%; */
  /* flex-direction: column; */
  /* margin-top: 10%; */
}
</style>
