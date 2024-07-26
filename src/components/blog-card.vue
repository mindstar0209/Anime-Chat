<template>
  <div class="blog-card-container">
    <img :alt="image_alt" :src="image_src" class="blog-card-image" />
    <h5 class="blog-card-text">{{ new_prop }}</h5>
    <span>{{ description }}</span>
    <next-button button="Read more"></next-button>
  </div>
</template>

<script>
import NextButton from './next-button'

export default {
  name: 'BlogCard',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    description: {
      type: String,
      default:
        'Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover',
    },
    new_prop: {
      type: String,
      default: 'Rover raised $65 million',
    },
    image_src: {
      type: String,
      default:
        'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-bags.jpg',
    },
  },
  components: {
    NextButton,
  },
}
</script>

<style scoped>
.blog-card-container {
  flex: 1;
  width: 255px;
  margin: var(--dl-space-space-unit);
  display: flex;
  max-width: 300px;
  min-width: 200px;
  align-items: flex-start;
  flex-direction: column;
}
.blog-card-image {
  width: 100%;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem hsl(0deg 0% 8% / 12%), 0 0.125rem 0.25rem -0.0625rem hsl(0deg 0% 8% / 7%);
  object-fit: cover;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius75);
}

.blog-card-text {
  color: var(--dl-color-secondary-500);
  font-size: 1.25rem;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
</style>
