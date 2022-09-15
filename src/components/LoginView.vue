<template>
  <div class="flexx">
    <div>
      <v-btn to="topics">Rota Teste</v-btn>
      <v-btn to="/">Rota Teste (Volta)</v-btn>
    </div>
    <h1>Gelo Account</h1>
    <div>
      <v-form class="form d-flex justify-center mb-6" ref="form">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="passWord"
          :counter="13"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
      </v-form>
      <v-btn color="success" class="mr-4" @click="confirmaEmail"> Login </v-btn>
      <v-btn class="ma-2" outlined color="indigo" to="signin">
        Não tem cadastro?</v-btn
      >
    </div>
  </div>
</template>

<script>
import conexao_db from "../conexao_db.js";

export default {
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "Informe seu e-mail",
      (v) => /.+@.+\..+/.test(v) || "O email precisa ser válido.",
    ],
    passWord: "",
    passwordRules: [
      (v) => !!v || "Informe sua senha",
      (v) => /....../.test(v) || "Sua senha precisa de mais de 6 caracteres.",
    ],
    emails: [],
  }),

  methods: {
    confirmaEmail() {
      let isValid = false;
      // se já houver o email no banco de dados ele entra no if
      conexao_db.checkEmail((dados) => (this.emails = dados));
      for (let el of this.emails) {
        if (el.email == this.email) {
          isValid = true;
          break;
        }
      }

      if (isValid) console.log("muito que bem");
      console.log(this.emails);
      console.log("Funcao validar email está pegando");
    },
    // this.$router.push({ name: "tasks" });
  },
};
</script>

<style>
.flexx {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 10%;
}
.form {
  flex-direction: column;
}
</style>
