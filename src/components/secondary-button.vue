<template>
  <div class="secondary-button-container" v-bind:class="rootClassName">
    <button class="secondary-button-button button ButtonSmall">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SecondaryButton',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'Start',
    },
  },
}
</script>

<style scoped>
.secondary-button-container {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.secondary-button-button {
  color: var(--dl-color-gray-white);
  outline: none;
  background: linear-gradient(310deg,#141727,#3a416f);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-doubleunit);
  border-radius: var(--dl-radius-radius-radius5);
  padding-right: var(--dl-space-space-doubleunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.secondary-button-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.secondary-button-root-class-name {
  top: -1px;
  flex: 1;
  right: 15px;
  position: absolute;
}
</style>
