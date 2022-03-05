<template>
  <div class="product">
    <h3>Product name shown</h3>
    <small v-if="smallText">Identifier/Model # that brand provides</small>

    <div v-if="items" class="product-quantity">
      <p>176.000</p>
      <p>3 items</p>
    </div>
    <p v-else>0882AD</p>
  </div>
</template>

<script>
export default {
  props: {
    smallText: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  h3 {
    margin: 5px 0;
    color: #4642d4;
    font-weight: 500;
  }
  > p {
    margin: 5px 0;
    width: 100%;
    text-align: start;
    border-bottom: 1px solid lightgray;
    padding-bottom: 7px;
  }
  small {
    font-size: 0.7em;
  }

  .product-quantity {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    // flex: 1;

    p {
      border-bottom: 1px solid lightgray;
      text-align: start;
    }

    p:first-child {
      width: 100px;
    }

    p:last-child {
      width: 60px;
    }
  }
}
</style>
