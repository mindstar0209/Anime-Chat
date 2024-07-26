<template>
  <div class="next-button-container"></div>
</template>

<script>
export default {
  name: 'NextButton',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.next-button-container {
  display: flex;
  position: relative;
}
</style>
