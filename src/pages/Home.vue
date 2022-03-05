<template>
  <main class="container">
    <section class="contain">
      <h3>Upload/Edit Product (internal)</h3>

      <Input :value="`TDB`" :label="`Passcode`" />

      <router-link to="/add-product">
        <Button :text="`Add Product`" :class="`add-button`" />
      </router-link>

      <Input
        :value="`542562`"
        :label="`Edit Product (Input Product internal ID)`"
      />

      <router-link to="/edit-product">
        <Button :text="`Edit Product`" :class="`edit-button`" />
      </router-link>
    </section>
  </main>
</template>

<script>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";

export default {
  components: {
    Button,
    Input,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  background-color: lightgray;
}

.contain {
  width: 35%;
  background-color: #fff;
  padding-right: 40px;
  padding-left: 40px;
}

.add-button {
  background-color: #dedef6;
  color: #000;
}

.edit-button {
  margin-top: 15px;
  width: 50%;
  margin-right: 50%;
  background-color: #dedef6;
  color: #000;
}
</style>
