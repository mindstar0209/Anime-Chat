<template>
  <div class="outline-gray-button-container">
    <button class="outline-gray-button-button button ButtonSmall">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'OutlineGrayButton',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.outline-gray-button-container {
  display: flex;
  position: relative;
}
.outline-gray-button-button {
  color: var(--dl-color-secondary-200);
  outlinr: none;
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-color: var(--dl-color-secondary-200);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.outline-gray-button-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
</style>
