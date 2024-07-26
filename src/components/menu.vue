<template>
  <div class="menu-menu" v-bind:class="rootClassName">
    <router-link to="/" class="menu-navlink">
      <div class="menu-container">
        <svg viewBox="0 0 1024 1024" class="menu-icon">
          <path
            d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"
          ></path>
        </svg>
        <span class="menu-text">Home</span>
      </div>
    </router-link>
    <router-link to="/home" class="menu-navlink1">
      <div class="menu-container1">
        <svg viewBox="0 0 1024 1024" class="menu-icon2">
          <path
            d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"
          ></path>
        </svg>
        <span class="menu-text1">Community</span>
      </div>
    </router-link>
    <router-link to="/chat" class="menu-navlink2">
      <div class="menu-container2">
        <svg viewBox="0 0 1152 1024" class="menu-icon4">
          <path
            d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"
          ></path>
        </svg>
        <span class="menu-text2">Chat</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.menu-menu {
  width: 500px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.menu-navlink {
  display: contents;
}
.menu-container {
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  text-decoration: none;
}
.menu-container:hover {
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: rgba(222, 154, 224, 0.13);
}
.menu-icon {
  fill: var(--dl-color-primary-700);
  width: 24px;
  height: 24px;
  align-self: center;
  transition: 0.3s;
}
.menu-icon:hover {
  fill: var(--dl-color-primary-700);
}
.menu-text {
  color: var(--dl-color-primary-700);
  font-size: 0.875rem;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.menu-text:hover {
  color: var(--dl-color-primary-softpurple);
}
.menu-navlink1 {
  display: contents;
}
.menu-container1 {
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  margin-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  text-decoration: none;
}
.menu-container1:hover {
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: rgba(222, 154, 224, 0.13);
}
.menu-icon2 {
  fill: var(--dl-color-primary-700);
  width: 24px;
  height: 24px;
  align-self: center;
}
.menu-text1 {
  color: var(--dl-color-primary-700);
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
}
.menu-text1:hover {
  color: var(--dl-color-primary-softpurple);
}
.menu-navlink2 {
  display: contents;
}
.menu-container2 {
  display: flex;
  transition: 0.3s;
  align-items: flex-start;
  margin-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  text-decoration: none;
}
.menu-container2:hover {
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: rgba(222, 154, 224, 0.13);
}
.menu-icon4 {
  fill: var(--dl-color-primary-700);
  width: 24px;
  height: 24px;
  align-self: center;
}
.menu-text2 {
  color: var(--dl-color-primary-700);
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
}
.menu-text2:hover {
  color: var(--dl-color-primary-softpurple);
}
.menu-root-class-name {
  flex: 1;
  width: 500px;
  margin-left: var(--dl-space-space-doubleunit);
}
.menu-root-class-name1 {
  flex: 1;
  width: 500px;
  margin-left: 300px;
}
@media(max-width: 991px) {
  .menu-menu {
    display: none;
  }
}
</style>
