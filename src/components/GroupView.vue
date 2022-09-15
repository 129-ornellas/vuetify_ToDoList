<template>
  <div>
    <h1>Cadastro e remoção de classes das tarefas!</h1>

    <v-btn to="topics">Rota Teste </v-btn>
    <v-btn to="login">Rota Teste (Volta)</v-btn>
  </div>
</template>

<script>
function geraNumero() {
  return Math.random();
}
console.log(geraNumero());

const divide2 = () => {
  return geraNumero() / 2;
};

console.log(divide2());
</script>
