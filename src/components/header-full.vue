<template>
  <div class="header-full-header">
    <nav class="header-full-nav">
      <div class="header-full-container">
        <router-link to="/home" class="header-full-navlink Large">
          Soft UI Design System
        </router-link>
        <div class="header-full-menu">
          <router-link to="/home" class="header-full-navlink1 Large">
            Home
          </router-link>
          <router-link to="/profile" class="header-full-navlink2 Large">
            Profile
          </router-link>
          <router-link to="/" class="header-full-navlink3 Large">
            Coming Soon
          </router-link>
        </div>
        <div class="header-full-container1">
          <div class="header-full-container2">
            <primary-pink-button button="buy now"></primary-pink-button>
          </div>
          <svg viewBox="0 0 1024 1024" class="header-full-icon">
            <path
              d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import PrimaryPinkButton from './primary-pink-button'

export default {
  name: 'HeaderFull',
  props: {},
  components: {
    PrimaryPinkButton,
  },
}
</script>

<style scoped>
.header-full-header {
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 3;
  box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)!important;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-full-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1320px;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.header-full-container {
  color: var(--dl-color-gray-black);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-full-navlink {
  font-weight: 600;
  margin-right: var(--dl-space-space-unit);
  text-decoration: none;
}
.header-full-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.header-full-navlink1 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-full-navlink1:hover {
  color: var(--dl-color-gray-500);
}
.header-full-navlink2 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-full-navlink2:hover {
  color: var(--dl-color-gray-500);
}
.header-full-navlink3 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-full-navlink3:hover {
  color: var(--dl-color-gray-500);
}
.header-full-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-full-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-full-icon {
  width: 24px;
  height: 24px;
  display: none;
  margin-left: var(--dl-space-space-unit);
}
@media(max-width: 991px) {
  .header-full-nav {
    max-width: 960px;
  }
  .header-full-navlink {
    color: var(--dl-color-secondary-700);
  }
  .header-full-menu {
    display: none;
  }
  .header-full-icon {
    display: flex;
  }
}
@media(max-width: 479px) {
  .header-full-container2 {
    display: none;
  }
}
</style>
