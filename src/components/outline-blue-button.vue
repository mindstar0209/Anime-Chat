<template>
  <div class="outline-blue-button-container">
    <button class="outline-blue-button-button button ButtonSmall">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'OutlineBlueButton',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.outline-blue-button-container {
  display: flex;
  position: relative;
}
.outline-blue-button-button {
  color: var(--dl-color-blue-500);
  cursor: pointer;
  background: white;
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-blue-500);
  border-width: 1px;
  padding-left: var(--dl-space-space-doubleunit);
  border-radius: var(--dl-radius-radius-radius5);
  padding-right: var(--dl-space-space-doubleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: transparent;
}
.outline-blue-button-button:hover {
  transform: scale(1.02);
}
</style>
