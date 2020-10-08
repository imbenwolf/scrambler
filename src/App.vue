<template>
  <div id="app">
    <textarea v-model="scrambleText" />
    <button @click="scramble" style="display: block">Scramble</button>
  </div>
</template>

<script>
import typoglycemia from './typoglycemia';

export default {
  name: "App",
  data: () => ({
    scrambleText: "",
  }),
  methods: {
    scramble() {
      this.scrambleText = typoglycemia.scramble(this.scrambleText)
    },
  },
};
</script>

<style>
#app {
  padding: 20px;
}
</style>
