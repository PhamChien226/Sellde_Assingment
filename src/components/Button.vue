<template>
  <button @click="clickButton" :class="className">{{ text }}</button>
</template>

<script>
export default {
  props: ["text", "class"],

  computed:{
      className(){
          return "button " + this.class
      }
  },
  methods: {
    clickButton() {
      console.log(this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: #fe805c;
  width: 80%;
  display: inline-block;
  border: none;
  margin-top: 50px;
  padding: 15px 0;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
