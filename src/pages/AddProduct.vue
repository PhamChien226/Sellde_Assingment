<template>
  <main class="container">
    <section class="contain">
      <h3>Upload Product (internal)</h3>

      <ProductCard />
      <ProductCard :smallText="true" :items="true" />
      <ProductCard :smallText="true" />
      <ProductCard :items="true" />
      <ProductCard :smallText="true" />

      <PickImage />
      <Button :text="`Upload`" />
    </section>
  </main>
</template>

<script>
import Button from "../components/Button.vue";
import ProductCard from "../components/ProductCard.vue";
import PickImage from "../components/PickImage.vue";

export default {
  components: {
    Button,
    ProductCard,
    PickImage,
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

  overflow: scroll;
}

.contain {
  width: 35%;
  min-height: 100vh;
  height: fit-content;
  background-color: #fff;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 100px;
}

.pickImage {
  width: 180px;
  height: 180px;
  border: 2px dashed gray;
  margin: auto;
  margin-top: 40px;
  border-radius: 10px;
  position: relative;
  background-color: transparent;

  .icon {
    position: absolute;
    bottom: -14px;
    right: -20px;
  }
}
.pickImage:hover {
  border: 2px dashed black;
}
</style>
