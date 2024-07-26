<template>
  <div class="sidebardiv-container" v-bind:class="rootClassName">
    <div class="sidebardiv-container01">
      <div class="sidebardiv-sidebar">
        <div class="sidebardiv-profile">
          <img :src="image_src" class="sidebardiv-image" />
          <div class="sidebardiv-container02">
            <span class="sidebardiv-text">{{ text5 }}</span>
            <span class="sidebardiv-text1">{{ text6 }}</span>
          </div>
        </div>
        <nav class="sidebardiv-nav">
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link"
          >
            <div class="sidebardiv-container03">
              <div class="sidebardiv-container04">
                <svg viewBox="0 0 1024 1024" class="sidebardiv-icon">
                  <path
                    d="M1024 676.571v109.714c0 9.714-8.571 18.286-18.286 18.286h-786.286v109.714c0 9.714-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.857c-3.429-3.429-5.143-8-5.143-12.571 0-5.143 1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8 18.286 18.286v109.714h786.286c9.714 0 18.286 8 18.286 18.286zM1024 365.714c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-786.286c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h786.286v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143z"
                  ></path>
                </svg>
              </div>
              <span class="sidebardiv-text2">{{ text }}</span>
            </div>
          </a>
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link1"
          >
            <div class="sidebardiv-container05">
              <div class="sidebardiv-container06">
                <svg viewBox="0 0 1024 1024" class="sidebardiv-icon02">
                  <path
                    d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM307.2 622.933c0 0 5.589 7.381 14.123 16.341 6.187 6.528 14.421 14.549 24.619 23.040 14.379 11.989 32.939 25.173 55.339 36.395 30.080 15.019 67.371 26.624 110.72 26.624s80.64-11.605 110.72-26.624c22.4-11.221 40.96-24.405 55.339-36.395 10.197-8.491 18.432-16.512 24.619-23.040 8.533-8.96 14.123-16.341 14.123-16.341 14.123-18.859 10.325-45.611-8.533-59.733s-45.611-10.325-59.733 8.533l-7.723 8.789c-4.267 4.48-10.112 10.197-17.408 16.299-10.368 8.661-23.424 17.877-38.827 25.6-20.48 10.197-44.8 17.579-72.576 17.579s-52.096-7.381-72.576-17.621c-15.36-7.68-28.459-16.939-38.827-25.6-7.296-6.101-13.141-11.819-17.408-16.299l-7.723-8.747c-14.123-18.859-40.875-22.656-59.733-8.533s-22.656 40.875-8.533 59.733z"
                  ></path>
                </svg>
              </div>
              <span class="sidebardiv-text3">{{ text7 }}</span>
            </div>
          </a>
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link2"
          >
            <div class="sidebardiv-container07">
              <div class="sidebardiv-container08">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  class="sidebardiv-icon04"
                >
                  <path
                    d="M365.714 329.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714 49.143-109.714 109.714-109.714 109.714 49.143 109.714 109.714zM950.857 548.571v256h-804.571v-109.714l182.857-182.857 91.429 91.429 292.571-292.571zM1005.714 146.286h-914.286c-9.714 0-18.286 8.571-18.286 18.286v694.857c0 9.714 8.571 18.286 18.286 18.286h914.286c9.714 0 18.286-8.571 18.286-18.286v-694.857c0-9.714-8.571-18.286-18.286-18.286zM1097.143 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-914.286c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h914.286c50.286 0 91.429 41.143 91.429 91.429z"
                  ></path>
                </svg>
              </div>
              <span class="sidebardiv-text4">{{ text71 }}</span>
            </div>
          </a>
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link3"
          >
            <div class="sidebardiv-container09">
              <svg viewBox="0 0 1024 1024" class="sidebardiv-icon06">
                <path
                  d="M512 128h256v170h-170v428q0 70-51 120t-121 50-120-50-50-120 50-121 120-51q42 0 86 24v-450z"
                ></path>
              </svg>
              <span class="sidebardiv-text5">{{ text2 }}</span>
            </div>
          </a>
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link4"
          >
            <div class="sidebardiv-container10">
              <svg viewBox="0 0 1024 1024" class="sidebardiv-icon08">
                <path
                  d="M480 704c88.366 0 160-71.634 160-160v-384c0-88.366-71.634-160-160-160s-160 71.634-160 160v384c0 88.366 71.636 160 160 160zM704 448v96c0 123.71-100.29 224-224 224-123.712 0-224-100.29-224-224v-96h-64v96c0 148.238 112.004 270.3 256 286.22v129.78h-128v64h320v-64h-128v-129.78c143.994-15.92 256-137.982 256-286.22v-96h-64z"
                ></path>
              </svg>
              <span class="sidebardiv-text6">{{ text21 }}</span>
            </div>
          </a>
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link5"
          >
            <div class="sidebardiv-container11">
              <svg viewBox="0 0 1024 1024" class="sidebardiv-icon10">
                <path
                  d="M426 640v-154l-238 240-60-60 238-240h-152v-84h298v298h-86zM768 44q34 0 60 25t26 59v768q0 34-26 60t-60 26h-426q-34 0-60-26t-26-60v-128h86v42h426v-596h-426v42h-86v-128q0-34 26-60t60-26z"
                ></path>
              </svg>
              <span class="sidebardiv-text7">{{ text3 }}</span>
            </div>
          </a>
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link6"
          >
            {{ text4 }}
          </a>
          <a
            href="https://1.tongji.edu.cn/"
            target="_blank"
            rel="noreferrer noopener"
            class="sidebardiv-link7"
          >
            {{ text41 }}
          </a>
        </nav>
        <div class="sidebardiv-container12">
          <div class="sidebardiv-container13">
            <div class="sidebardiv-container14">
              <div class="sidebardiv-container15">
                <div class="sidebardiv-container16">
                  <a
                    href="https://platform.openai.com/account/api-keys"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="sidebardiv-link8"
                  >
                    <div class="sidebardiv-container17">
                      <svg
                        id="APIKeyInfo"
                        viewBox="0 0 1024 1024"
                        class="sidebardiv-icon12"
                      >
                        <path
                          d="M512 256q70 0 120 50t50 120q0 54-64 111t-64 103h-84q0-46 20-79t44-48 44-37 20-50q0-34-26-59t-60-25-60 25-26 59h-84q0-70 50-120t120-50zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 768v-86h84v86h-84z"
                        ></path>
                      </svg>
                      <span>OpenAI Key</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <textarea
              id="APIkey"
              cols="20"
              :placeholder="textarea_placeholder1"
              class="sidebardiv-textarea textarea"
            ></textarea>
          </div>
          <div class="sidebardiv-container18"></div>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 1024 1024" class="sidebardiv-icon14">
      <path
        d="M598 298v136l-86-84v-222h256v170h-170zM182 128l714 714-54 54-244-244v74q0 70-51 120t-121 50-120-50-50-120 50-121 120-51q42 0 86 24v-12l-384-384z"
      ></path></svg
    ><svg viewBox="0 0 1024 1024" class="sidebardiv-icon16">
      <path
        d="M0 854h1024v170h-1024v-170zM884 172l-84 84-160-160 84-84q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM758 298l-428 428h-160v-160l428-428z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Sidebardiv',
  props: {
    textarea_placeholder1: {
      type: String,
      default: 'Enter your API key here...',
    },
    text41: {
      type: String,
      default: '帮助文档',
    },
    sidebar: String,
    text21: {
      type: String,
      default: '角色语音',
    },
    text: {
      type: String,
      default: '切换聊天',
    },
    text5: {
      type: String,
      default: '鼠鼠我啊',
    },
    text71: {
      type: String,
      default: '更换背景',
    },
    image_src: {
      type: String,
      default: '/chenrui-200h.png',
    },
    text7: {
      type: String,
      default: '角色设定',
    },
    textarea_placeholder: {
      type: String,
      default: 'placeholder',
    },
    text2: {
      type: String,
      default: '背景音乐',
    },
    rootClassName: String,
    text3: {
      type: String,
      default: '资源主页',
    },
    text4: {
      type: String,
      default: '文明公约',
    },
    text1: {
      type: String,
      default: '聊天背景',
    },
    text6: {
      type: String,
      default: '兴趣使然',
    },
  },
}
</script>

<style scoped>
.sidebardiv-container {
  flex: 0 0 auto;
  width: 190px;
  height: 984px;
  display: flex;
  position: relative;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
}
.sidebardiv-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.sidebardiv-sidebar {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: flex-end;
  padding-top: var(--dl-space-space-unit1);
  padding-left: var(--dl-space-space-unit1);
  margin-bottom: var(--dl-space-space-halfunit6);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit1);
  justify-content: flex-start;
  background-color: #f3f0f5;
  border-top-left-radius: var(--dl-radius-radius-radius4);
  border-bottom-left-radius: var(--dl-radius-radius-radius4);
}
.sidebardiv-profile {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit1);
  align-items: center;
  border-color: #b7b7b7;
  border-width: 1px;
  flex-direction: row;
  justify-content: flex-start;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
.sidebardiv-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.sidebardiv-container02 {
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-halfunit6);
  flex-direction: column;
  justify-content: space-between;
}
.sidebardiv-text {
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.25rem;
}
.sidebardiv-text1 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
}
.sidebardiv-nav {
  width: 142px;
  height: 377px;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: stretch;
  flex-direction: column;
}
.sidebardiv-link {
  display: contents;
}
.sidebardiv-container03 {
  flex: 0 0 auto;
  width: auto;
  height: 24px;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  justify-content: stretch;
  text-decoration: none;
}
.sidebardiv-container04 {
  flex: 0 0 auto;
  width: 28px;
  height: 22px;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
}
.sidebardiv-icon {
  width: 21px;
  height: 100%;
}
.sidebardiv-text2 {
  align-self: center;
  margin-bottom: 0px;
}
.sidebardiv-link1 {
  display: contents;
}
.sidebardiv-container05 {
  flex: 0 0 auto;
  width: auto;
  height: 24px;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  justify-content: stretch;
  text-decoration: none;
}
.sidebardiv-container06 {
  flex: 0 0 auto;
  width: 28px;
  height: 22px;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
}
.sidebardiv-icon02 {
  width: 22px;
  height: 100%;
}
.sidebardiv-text3 {
  align-self: center;
  margin-bottom: 0px;
}
.sidebardiv-link2 {
  display: contents;
}
.sidebardiv-container07 {
  flex: 0 0 auto;
  width: auto;
  height: 24px;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  justify-content: stretch;
  text-decoration: none;
}
.sidebardiv-container08 {
  flex: 0 0 auto;
  width: 28px;
  height: 22px;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
}
.sidebardiv-icon04 {
  width: 24px;
  height: 24px;
}
.sidebardiv-text4 {
  align-self: center;
  margin-bottom: 0px;
}
.sidebardiv-link3 {
  display: contents;
}
.sidebardiv-container09 {
  flex: 0 0 auto;
  width: auto;
  height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  justify-content: flex-start;
  text-decoration: none;
}
.sidebardiv-icon06 {
  width: 24px;
  height: 24px;
}
.sidebardiv-text5 {
  align-self: center;
  margin-bottom: 0ts;
}
.sidebardiv-link4 {
  display: contents;
}
.sidebardiv-container10 {
  flex: 0 0 auto;
  width: auto;
  height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  justify-content: flex-start;
  text-decoration: none;
}
.sidebardiv-icon08 {
  width: 24px;
  height: 24px;
}
.sidebardiv-text6 {
  align-self: center;
  margin-bottom: 0ts;
}
.sidebardiv-link5 {
  display: contents;
}
.sidebardiv-container11 {
  flex: 0 0 auto;
  width: auto;
  height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  padding-bottom: 0px;
  justify-content: flex-start;
  text-decoration: none;
}
.sidebardiv-icon10 {
  width: 24px;
  height: 24px;
}
.sidebardiv-text7 {
  margin-bottom: 0px;
}
.sidebardiv-link6 {
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.sidebardiv-link7 {
  text-decoration: none;
}
.sidebardiv-container12 {
  flex: 0 0 auto;
  right: 6px;
  width: 166px;
  bottom: 0px;
  height: 150px;
  display: flex;
  position: absolute;
  align-self: stretch;
  align-items: flex-start;
  justify-content: flex-start;
}
.sidebardiv-container13 {
  flex: 0 0 auto;
  width: 173px;
  height: auto;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
  padding-right: var(--dl-space-space-halfunit6);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.sidebardiv-container14 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sidebardiv-container15 {
  flex: 0 0 auto;
  width: 159px;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.sidebardiv-container16 {
  width: 162px;
  height: 24px;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: flex-start;
}
.sidebardiv-link8 {
  display: contents;
}
.sidebardiv-container17 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  text-decoration: none;
}
.sidebardiv-icon12 {
  width: 20px;
  height: 18px;
}
.sidebardiv-textarea {
  width: 157px;
  height: 112px;
}
.sidebardiv-container18 {
  flex: 0 0 auto;
  width: auto;
  height: 129px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.sidebardiv-icon14 {
  width: 24px;
  height: 24px;
}
.sidebardiv-icon16 {
  width: 24px;
  height: 24px;
}
.sidebardiv-root-class-name {
  flex: 0.15;
  width: 144px;
  height: auto;
  align-self: stretch;
}
.sidebardiv-root-class-name1 {
  flex: 0.15;
  width: 144px;
  height: auto;
  align-self: stretch;
}
@media(max-width: 991px) {
  .sidebardiv-profile {
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }
  .sidebardiv-image {
    margin-left: 0px;
  }
}
</style>
