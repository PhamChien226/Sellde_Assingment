<template>
  <main>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/product">Product</router-link> -->
  </main>
  <router-view />
</template>

<script>
import Home from "./pages/Home.vue";

export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
