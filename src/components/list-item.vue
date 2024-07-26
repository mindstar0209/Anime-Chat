<template>
  <div class="list-item-container">
    <h5 class="list-item-text HeadingThree">{{ new_prop }}</h5>
    <span>{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    description: {
      type: String,
      default:
        'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
    },
    new_prop: {
      type: String,
      default: '1. Listen to Social Conversations',
    },
  },
}
</script>

<style scoped>
.list-item-container {
  flex: 0 0 auto;
  display: flex;
  padding: 1rem;
  max-width: 500px;
  align-items: flex-start;
  flex-direction: column;
}
.list-item-text {
  color: var(--dl-color-secondary-600);
  margin-bottom: var(--dl-space-space-halfunit);
}
</style>
