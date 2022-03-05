<template>
  <div class="wrapper">
    <label for="input">{{ label }}</label>
    <input type="text" id="input" :value="value" />
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  font-size: 1em;

  label {
    color: #4642d4;
    font-weight: 600;
    margin-bottom: 7px;
  }
  input {
    height: 1;
    width: 75px;
    border: none;
    border-bottom-color: lightgray;
    border-bottom-style: dashed;
    padding-left: 0px;
    font-size: 1em;
  }
}
</style>
