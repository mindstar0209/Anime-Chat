<template>
  <div class="menu1-menu" v-bind:class="rootClassName">
    <svg viewBox="0 0 1024 1024" class="menu1-icon">
      <path
        d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"
      ></path>
    </svg>
    <span class="menu1-text Large">Home</span>
    <svg viewBox="0 0 1024 1024" class="menu1-icon2">
      <path
        d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"
      ></path>
    </svg>
    <span class="menu1-text1">Community</span>
    <svg viewBox="0 0 1152 1024" class="menu1-icon4">
      <path
        d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"
      ></path>
    </svg>
    <span class="menu1-text2">Chat</span>
  </div>
</template>

<script>
export default {
  name: 'Menu1',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.menu1-menu {
  width: 530px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.menu1-icon {
  width: 24px;
  height: 24px;
  align-self: center;
}
.menu1-text {
  margin-top: var(--dl-space-space-halfunit14);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit1);
  margin-right: var(--dl-space-space-unit1);
  margin-bottom: var(--dl-space-space-halfunit14);
  text-decoration: none;
}
.menu1-text:hover {
  color: var(--dl-color-gray-500);
}
.menu1-icon2 {
  width: 24px;
  height: 24px;
  align-self: center;
}
.menu1-text1 {
  margin-top: var(--dl-space-space-halfunit14);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit1);
  margin-right: var(--dl-space-space-unit1);
  margin-bottom: var(--dl-space-space-halfunit14);
  text-decoration: none;
}
.menu1-text1:hover {
  color: var(--dl-color-gray-500);
}
.menu1-icon4 {
  width: 24px;
  height: 24px;
  align-self: center;
}
.menu1-text2 {
  margin-top: var(--dl-space-space-halfunit14);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit1);
  margin-right: var(--dl-space-space-unit1);
  margin-bottom: var(--dl-space-space-halfunit14);
  text-decoration: none;
}
.menu1-text2:hover {
  color: var(--dl-color-gray-500);
}
.menu1-root-class-name {
  flex: 1;
  width: auto;
  min-width: 288px;
  margin-left: 8px;
}
@media(max-width: 991px) {
  .menu1-menu {
    display: none;
  }
}
</style>
