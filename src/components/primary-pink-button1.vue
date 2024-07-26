<template>
  <div class="primary-pink-button1-container" v-bind:class="rootClassName">
    <div
      data-thq="thq-dropdown"
      class="primary-pink-button1-thq-dropdown list-item"
    >
      <div
        data-thq="thq-dropdown-toggle"
        class="primary-pink-button1-dropdown-toggle teleport-show"
      >
        <div
          data-thq="thq-dropdown-arrow"
          class="primary-pink-button1-dropdown-arrow"
        >
          <svg viewBox="0 0 1024 1024" class="primary-pink-button1-icon">
            <path d="M426 726v-428l214 214z"></path>
          </svg>
        </div>
      </div>
      <div class="primary-pink-button1-container1">
        <div
          data-thq="thq-dropdown"
          class="primary-pink-button1-thq-dropdown1 list-item"
        >
          <ul
            data-thq="thq-dropdown-list"
            class="primary-pink-button1-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              class="primary-pink-button1-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="primary-pink-button1-dropdown-toggle1"
              >
                <span class="primary-pink-button1-item1">{{ item1 }}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              class="primary-pink-button1-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="primary-pink-button1-dropdown-toggle2"
              >
                <span class="primary-pink-button1-text">{{ Text }}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              class="primary-pink-button1-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="primary-pink-button1-dropdown-toggle3"
              >
                <span value="设置" class="primary-pink-button1-text1">
                  {{ text1 }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul
        data-thq="thq-dropdown-list"
        class="primary-pink-button1-dropdown-list1"
      >
        <li
          data-thq="thq-dropdown"
          class="primary-pink-button1-dropdown3 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="primary-pink-button1-dropdown-toggle4"
          >
            <span class="primary-pink-button1-text2">{{ text1 }}</span>
          </div>
        </li>
        <li
          data-thq="thq-dropdown"
          class="primary-pink-button1-dropdown4 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="primary-pink-button1-dropdown-toggle5"
          >
            <span class="primary-pink-button1-text3">{{ Text }}</span>
          </div>
        </li>
        <li
          data-thq="thq-dropdown"
          class="primary-pink-button1-dropdown5 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="primary-pink-button1-dropdown-toggle6"
          >
            <span class="primary-pink-button1-text4">{{ item1 }}</span>
          </div>
        </li>
      </ul>
    </div>
    <button class="primary-pink-button1-button button ButtonSmall">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryPinkButton1',
  props: {
    button: {
      type: String,
      default: 'Username',
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
    item1: {
      type: String,
      default: '设置',
    },
  },
}
</script>

<style scoped>
.primary-pink-button1-container {
  display: flex;
  position: relative;
}
.primary-pink-button1-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  z-index: 100;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unit1);
  border-radius: 2px;
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit14);
}
.primary-pink-button1-dropdown-arrow {
  transition: 0.3s;
}
.primary-pink-button1-icon {
  width: 18px;
  height: 18px;
  margin-top: auto;
  transition: 0.3s;
  margin-bottom: auto;
}
.primary-pink-button1-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.primary-pink-button1-thq-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-list {
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
.primary-pink-button1-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unit1);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit14);
}
.primary-pink-button1-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button1-item1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button1-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-toggle2 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unit1);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit14);
}
.primary-pink-button1-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button1-text {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button1-dropdown2 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-toggle3 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unit1);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit14);
}
.primary-pink-button1-dropdown-toggle3:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button1-text1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button1-dropdown-list1 {
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
.primary-pink-button1-dropdown3 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-toggle4 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unit1);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit14);
}
.primary-pink-button1-dropdown-toggle4:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button1-text2 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button1-dropdown4 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-toggle5 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unit1);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit14);
}
.primary-pink-button1-dropdown-toggle5:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button1-text3 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button1-dropdown5 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.primary-pink-button1-dropdown-toggle6 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit14);
  padding-left: var(--dl-space-space-unit1);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit14);
}
.primary-pink-button1-dropdown-toggle6:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.primary-pink-button1-text4 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.primary-pink-button1-button {
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
}
.primary-pink-button1-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.primary-pink-button1-root-class-name {
  top: 0px;
  left: 0px;
  position: static;
  align-self: center;
}
</style>
