<template>
  <div class="primary-pink-button-container" v-bind:class="rootClassName">
    <div
      data-thq="thq-dropdown"
      class="primary-pink-button-thq-dropdown list-item"
    >
      <div
        data-thq="thq-dropdown-toggle"
        class="primary-pink-button-dropdown-toggle teleport-show"
      >
        <div
          data-thq="thq-dropdown-arrow"
          class="primary-pink-button-dropdown-arrow"
        >
          <svg viewBox="0 0 1024 1024" class="primary-pink-button-icon">
            <path d="M426 726v-428l214 214z"></path>
          </svg>
        </div>
      </div>
      <div class="primary-pink-button-container1">
        <div
          data-thq="thq-dropdown"
          class="primary-pink-button-thq-dropdown1 list-item"
        >
          <ul
            data-thq="thq-dropdown-list"
            class="primary-pink-button-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              class="primary-pink-button-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="primary-pink-button-dropdown-toggle1"
              >
                <span class="primary-pink-button-item1">{{ item1 }}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              class="primary-pink-button-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="primary-pink-button-dropdown-toggle2"
              >
                <span class="primary-pink-button-text">{{ Text }}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              class="primary-pink-button-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="primary-pink-button-dropdown-toggle3"
              >
                <span value="设置" class="primary-pink-button-text1">
                  {{ text1 }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul data-thq="thq-dropdown-list" class="primary-pink-button-dropdown-list1">
        <li
          data-thq="thq-dropdown"
          class="primary-pink-button-dropdown3 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="primary-pink-button-dropdown-toggle4"
          >
            <span class="primary-pink-button-text2">{{ text1 }}</span>
          </div>
        </li>
        <li
          data-thq="thq-dropdown"
          class="primary-pink-button-dropdown4 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="primary-pink-button-dropdown-toggle5"
          >
            <span class="primary-pink-button-text3">{{ Text }}</span>
          </div>
        </li>
        <li
          data-thq="thq-dropdown"
          class="primary-pink-button-dropdown5 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="primary-pink-button-dropdown-toggle6"
          >
            <span class="primary-pink-button-text4">{{ item1 }}</span>
          </div>
        </li>
      </ul>
    </div>
    <router-link
      to="/personal"
      class="primary-pink-button-button button ButtonSmall"
    >
      {{ button }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PrimaryPinkButton',
  props: {
    item1: {
      type: String,
      default: '设置',
    },
    text1: {
      type: String,
      default: '发布资源',
    },
    Text: {
      type: String,
      default: '个人中心',
    },
    rootClassName: String,
    button: {
      type: String,
      default: 'Username',
    },
  },
}
</script>

<style scoped>
.primary-pink-button-container {
  display: flex;
  position: relative;
  border-radius: var(--dl-radius-radius-radius4);
}
.primary-pink-button-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  z-index: 100;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 2px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.primary-pink-button-dropdown-arrow {
  transition: 0.3s;
}
.primary-pink-button-icon {
  width: 18px;
  height: 18px;
  margin-top: auto;
  transition: 0.3s;
  margin-bottom: auto;
}
.primary-pink-button-container1 {
  flex: 0 0 auto;
  width: 150%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.primary-pink-button-thq-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-list {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: 4px;
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.primary-pink-button-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.primary-pink-button-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-primary-softpurple);
}
.primary-pink-button-item1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-toggle2 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.primary-pink-button-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-primary-softpurple);
}
.primary-pink-button-text {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button-dropdown2 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-toggle3 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.primary-pink-button-dropdown-toggle3:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-primary-softpurple);
}
.primary-pink-button-text1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button-dropdown-list1 {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: 4px;
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.primary-pink-button-dropdown3 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-toggle4 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.primary-pink-button-dropdown-toggle4:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button-text2 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button-dropdown4 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-toggle5 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.primary-pink-button-dropdown-toggle5:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button-text3 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button-dropdown5 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button-dropdown-toggle6 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.primary-pink-button-dropdown-toggle6:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button-text4 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button-button {
  color: var(--dl-color-gray-white);
  outline: none;
  background:  linear-gradient( 310deg ,#7928ca,#ff0080);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  text-decoration: none;
}
.primary-pink-button-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
</style>
