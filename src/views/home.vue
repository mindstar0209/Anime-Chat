<template>
  <div class="home-container">
    <div class="home-container01">
      <app-header rootClassName="header-root-class-name2"></app-header>
    </div>
    <div class="home-container02">
      <div class="home-container03">
        <h1 class="home-text">模型配布社区</h1>
        <span class="home-text1">分享Live2d模型文件、chatbot配置</span>
        <router-link to="/define-chatbot" class="home-navlink button">
          发布我的作品
        </router-link>
      </div>
      <div class="home-container04"></div>
      <div class="home-container05"></div>
      <div class="home-container06"></div>
      <div class="home-container07"></div>
    </div>
    <div class="home-container08">
      <span class="home-text2">最 新 推 荐</span>
    </div>
    <div class="home-container09">
      <div class="home-container10">
        <feature-card
          text="张三"
          text1="2023-5-23 18:00"
          text2="1324"
          heading="万叶"
          image_src="/mmexport1685014477871-500w.png"
          rootClassName="feature-card-root-class-name"
        ></feature-card>
        <feature-card
          text="李四"
          text1="2023-5-22 15:53"
          text2="134223"
          heading="神里绫华"
          image_src="/external/1683208050345869e5c49c6f2ead3a427cc10b7318cd1ab051aaca72f0ea578c2ae0e9aca6bd6.0_edit_45880411666435-500w.jpg"
        ></feature-card>
        <feature-card
          text="小玲"
          text1="2023-5-20 23:33"
          text2="254364"
          heading="纳西妲"
          image_src="/nahida_ico-400h.png"
        ></feature-card>
        <feature-card
          text="sllh的g"
          text1="2023-5-1 13:46"
          text2="4366856"
          heading="Q版海森"
          image_src="/external/img_20230112_150424-500w.jpg"
        ></feature-card>
        <feature-card
          text="dslfkj"
          text1="2023-1-3 8:00"
          text2="43656"
          heading="家主"
          image_src="/external/168320817113432b65f384e1c46da22f5c29dfa9ebec485c3ab50be4b71eec910efd2cdc11490.0_edit_45864665663834-500w.jpg"
        ></feature-card>
        <feature-card
          text="我是谁"
          text1="2023-3-1 16:32"
          text2="65745545"
          heading="旅行者"
          image_src="/external/16832081451716246ecfec44b9fbb19f5430bd63729c9b43897fd7b59f8fe076bdd5d6d6ac31a.0_edit_45873624077895-500w.jpg"
        ></feature-card>
      </div>
    </div>
    <footer-gray rootClassName="footer-gray-root-class-name"></footer-gray>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import FeatureCard from '../components/feature-card'
import FooterGray from '../components/footer-gray'

export default {
  name: 'Home',
  components: {
    AppHeader,
    FeatureCard,
    FooterGray,
  },
  metaInfo: {
    title: 'Home - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'Home - Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  transition: 0.3s;
  align-items: center;
  flex-direction: column;
}

.home-container01 {
  width: 100%;
  height: var(--dl-size-size-medium);
  display: flex;
  z-index: 101;
  align-items: center;
  flex-direction: column;
}
.home-container02 {
  width: 100%;
  height: 333px;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-self: center;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: space-between;
}
.home-container03 {
  flex: initial;
  width: 500px;
  height: auto;
  display: flex;
  z-index: 100;
  align-items: center;
  margin-left: var(--dl-space-space-twelveunits);
  flex-direction: column;
}
.home-text {
  color: var(--dl-color-secondary-600);
  width: 404px;
  font-size: 64px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-family: PT Sans;
  font-weight: 800;
  text-decoration:  ;
}
.home-text1 {
  color: var(--dl-color-secondary-700);
  align-self: flex-start;
}
.home-navlink {
  color: var(--dl-color-gray-white);
  width: 200px;
  height: var(--dl-size-size-small);
  padding: var(--dl-space-space-halfunit);
  font-size: 20px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-oneandhalfunits);
  transition: 0.3s;
  font-weight: 700;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  text-decoration: none;
  background-color: transparent;
  background-image: linear-gradient(135deg, rgb(255, 16, 172) 2.00%,rgb(170, 7, 255) 100.00%);
}
.home-navlink:hover {
  cursor: pointer;
  background-color: #cf6fe6;
}

.home-container04 {
  left: 1331px;
  width: 96px;
  bottom: -5px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(42, 178, 222, 0.45);
}
.home-container05 {
  right: 231px;
  width: 80px;
  bottom: 52px;
  height: 77px;
  display: flex;
  z-index: 100;
  position: absolute;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(247, 88, 21, 0.26);
}
.home-container06 {
  top: -25px;
  left: 1006px;
  width: 373px;
  height: 349px;
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  background-size: cover;
  justify-content: space-between;
  background-image: url("/nahida_ico-400h.png");
  background-position: center;
}
.home-container07 {
  top: -1px;
  flex: 0 0 auto;
  left: -54px;
  width: 321px;
  height: 319px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: rgba(222, 93, 141, 0.57);
}
.home-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(222, 154, 224, 0.39);
}
.home-text2 {
  color: var(--dl-color-secondary-700);
  font-size: 32px;
  align-self: center;
  font-style: normal;
  font-weight: 700;
}
.home-container09 {
  width: 100%;
  height: 876px;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
  background-image: linear-gradient(135deg, rgb(231, 251, 255) 1.00%,rgb(242, 229, 251) 100.00%);
}
.home-container10 {
  width: 958px;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 767px) {
  .home-container10 {
    padding: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
