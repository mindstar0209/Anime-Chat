<template>
  <div class="feature-card-container" v-bind:class="rootClassName">
    <div class="feature-card-container1">
      <router-link to="/profile" class="feature-card-navlink">
        <img :alt="image_alt" :src="image_src" class="feature-card-image" />
      </router-link>
      <div class="feature-card-container2">
        <svg viewBox="0 0 1024 1024" class="feature-card-icon">
          <path
            d="M321.008 1024c-68.246-142.008-31.902-223.378 20.55-300.044 57.44-83.956 72.244-167.066 72.244-167.066s45.154 58.7 27.092 150.508c79.772-88.8 94.824-230.28 82.782-284.464 180.314 126.012 257.376 398.856 153.522 601.066 552.372-312.532 137.398-780.172 65.154-832.85 24.082 52.676 28.648 141.85-20 185.126-82.352-312.276-285.972-376.276-285.972-376.276 24.082 161.044-87.296 337.144-194.696 468.73-3.774-64.216-7.782-108.528-41.55-169.98-7.58 116.656-96.732 211.748-120.874 328.628-32.702 158.286 24.496 274.18 241.748 396.622z"
          ></path>
        </svg>
        <span class="feature-card-text">{{ text2 }}</span>
      </div>
    </div>
    <router-link to="/profile" class="feature-card-navlink1">
      <h1 class="feature-card-text1">{{ heading }}</h1>
    </router-link>
    <div class="feature-card-container3">
      <router-link to="/personal" class="feature-card-navlink2">
        {{ text }}
      </router-link>
      <span class="feature-card-text2">{{ text1 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    text2: {
      type: String,
      default: '热度',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    rootClassName: String,
    text: {
      type: String,
      default: '发布者\n',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text1: {
      type: String,
      default: '发布时间\n',
    },
    heading: {
      type: String,
      default: 'Heading',
    },
  },
}
</script>

<style scoped>
.feature-card-container {
  flex: 0 0 auto;
  width: 27%;
  height: 328px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  position: relative;
  transition: 0.3s;
  align-items: center;
  border-color: #ffffff;
  border-width: 2px;
  border-radius: 10px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.feature-card-container:hover {
  cursor: pointer;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
}
.feature-card-container1 {
  width: 100%;
  height: 251px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
}
.feature-card-navlink {
  display: contents;
}
.feature-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  text-decoration: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.feature-card-container2 {
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  bottom: 0px;
  height: var(--dl-size-size-doubleunit);
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.68);
}
.feature-card-icon {
  width: 29px;
  height: 100%;
  opacity: 0.5;
  margin-left: var(--dl-space-space-halfunit);
}
.feature-card-text {
  color: rgba(0, 0, 0, 0.83);
  font-size: 16px;
  margin-left: var(--dl-space-space-unit);
}
.feature-card-navlink1 {
  display: contents;
}
.feature-card-text1 {
  font-size: 24px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 500;
  line-height: 1.15;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  text-transform: none;
  text-decoration: none;
}
.feature-card-container3 {
  width: 100%;
  height: 27px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  justify-content: space-between;
}
.feature-card-navlink2 {
  padding: 0px;
  align-self: center;
  transition: 0.3s;
  text-decoration: none;
}
.feature-card-navlink2:hover {
  color: rgba(117, 8, 167, 0.69);
  box-shadow: 5px 5px 10px 0px #d4d4d4;
}
.feature-card-text2 {
  padding: var(--dl-space-space-halfunit);
  align-self: center;
}
.feature-card-root-class-name {
  height: auto;
}
@media(max-width: 767px) {
  .feature-card-container {
    margin: var(--dl-space-space-halfunit);
  }
}
</style>
