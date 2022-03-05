<template>
  <button class="pickImage">
      <svg width="37" height="37" fill="none" class="icon" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 30.833c6.81 0 12.333-5.522 12.333-12.333 0-6.812-5.522-12.334-12.334-12.334-6.811 0-12.333 5.522-12.333 12.334 0 6.811 5.522 12.333 12.333 12.333Z" fill="#FE805C"/><rect x="16.959" y="10.791" width="3.083" height="15.417" rx="1" fill="#fff"/><rect x="26.209" y="16.959" width="3.083" height="15.417" rx="1" transform="rotate(90 26.209 16.959)" fill="#fff"/></svg>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pickImage {
  width: 180px;
  height: 180px;
  border: 2px dashed gray;
  margin: auto;
  // margin-top: 40px;
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
