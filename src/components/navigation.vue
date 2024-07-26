<template>
  <nav class="navigation-nav" v-bind:class="rootClassName">
    <div class="navigation-container">
      <img
        alt="image"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cc54fda1-357c-4ce7-aeb8-781bda6cad51/78b734e5-55bf-4632-a524-c36fa9a4bdb2?org_if_sml=14692"
        class="navigation-image"
      />
      <input
        type="text"
        placeholder="神里绫华"
        class="navigation-textinput input"
      />
      <app-menu1 rootClassName="menu1-root-class-name"></app-menu1>
      <div class="navigation-container1">
        <div class="navigation-container2">
          <primary-pink-button1
            rootClassName="primary-pink-button1-root-class-name"
          ></primary-pink-button1>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppMenu1 from './menu1'
import PrimaryPinkButton1 from './primary-pink-button1'

export default {
  name: 'Navigation',
  props: {
    rootClassName: String,
  },
  components: {
    AppMenu1,
    PrimaryPinkButton1,
  },
}
</script>

<style scoped>
.navigation-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  height: 60px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)!important;
  margin-top: var(--dl-space-space-unit1);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit14);
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: space-between;
  background-color: hsla(0,0%,100%,.8)!important;
}
.navigation-container {
  color: var(--dl-color-gray-black);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navigation-image {
  flex: 0 0 auto;
  width: 175px;
  height: 29px;
  z-index: 100;
  object-fit: cover;
  margin-right: var(--dl-space-space-halfunit14);
}
.navigation-textinput {
  flex: 0.25;
  color: var(--dl-color-secondary-600);
  width: auto;
  height: 34px;
  min-width: var(--dl-size-size-large);
  align-self: center;
  border-color: var(--dl-color-primary-logo);
  background-color: var(--dl-color-gray-white);
}
.navigation-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navigation-container2 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #D9D9D9;
}
.navigation-root-class-name1 {
  flex: 1;
  width: 100%;
  margin-top: 8px;
}
@media(max-width: 991px) {
  .navigation-nav {
    max-width: 960px;
  }
}
@media(max-width: 479px) {
  .navigation-container2 {
    display: none;
  }
}
</style>
