<template>
  <main class="container">
    <section class="contain">
      <header>
        <h3>Upload Product (internal)</h3>
        <p class="productId">Product ID - AFGGDE</p>
      </header>

      <ProductCard />
      <ProductCard :smallText="true" :items="true" />
      <ProductCard :smallText="true" />
      <ProductCard :items="true" />
      <ProductCard :smallText="true" />

      <section class="imageUpload">
        <img
          src="https://imageskincare.vn/wp-content/uploads/2020/10/i-Beauty-BG.jpg"
          width="180"
          height="180"
          class="image"
        />
        <img
          src="https://imageskincare.vn/wp-content/uploads/2020/10/i-Beauty-BG.jpg"
          width="180"
          height="180"
          class="image"
        />
        <PickImage />
      </section>

      <Button :text="`Update`" />
    </section>
  </main>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import Button from "../components/Button.vue";
import PickImage from "../components/PickImage.vue";

export default {
  components: {
    ProductCard,
    Button,
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

header {
  h3 {
    margin: 5px 0;
  }
  p {
    margin: 5px 0;
    color: #4642d4;
  }
}

.image {
  margin-right:10px;
}

.imageUpload {
    overflow: auto;
    overflow-y: hidden;
    white-space: nowrap;
    margin-top: 21px;
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(3,1fr);

}

.imageUpload::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.imageUpload {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
