<template>
  <div class="coming-soon-container">
    <app-header></app-header>
    <div class="coming-soon-container1">
      <div class="coming-soon-main">
        <div class="coming-soon-grid">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image01"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image02"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image03"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image04"
          />
          <img
            alt="image"
            src="https://oss.aplaybox.com/uploads/works/covers/20230508/8c833d559b9770da2db80d7d432f7036.jpg"
            loading="lazy"
            class="coming-soon-image05"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image06"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image07"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image08"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image09"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image10"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image11"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image12"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            class="coming-soon-image13"
          />
        </div>
        <div class="coming-soon-container2">
          <h1 class="coming-soon-text">Live2dChat</h1>
          <h1 class="coming-soon-text1">你的二次元AI助理</h1>
          <div class="coming-soon-container3">
            <input
              type="text"
              placeholder="输入想要的助理"
              class="coming-soon-textinput Small input"
            />
            <router-link to="/search" class="coming-soon-navlink">
              <secondary-button
                button="Search"
                rootClassName="secondary-button-root-class-name"
                class="coming-soon-component1"
              ></secondary-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <footer-gray></footer-gray>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'

export default {
  name: 'ComingSoon',
  components: {
    AppHeader,
    SecondaryButton,
    FooterGray,
  },
  metaInfo: {
    title: 'Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.coming-soon-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-900);
}
.coming-soon-container1 {
  width: 100%;
  height: 981px;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-sixunits);
  background-size: cover;
  background-image: url("/external/16832081451716246ecfec44b9fbb19f5430bd63729c9b43897fd7b59f8fe076bdd5d6d6ac31a.0_edit_45873624077895-1500w.jpg");
  background-repeat: no-repeat;
  background-position: top left;
}
.coming-soon-main {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 0;
  position: relative;
  max-width: 1320px;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: row;
  justify-content: flex-end;
}
.coming-soon-grid {
  top: -228px;
  left: -601px;
  width: 70%;
  display: none;
  grid-gap: var(--dl-space-space-doubleunit);
  position: absolute;
  transform: rotate(20deg);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.coming-soon-image {
  width: 100%;
}
.coming-soon-image01 {
  width: 100%;
  margin-top: -200px;
}
.coming-soon-image02 {
  width: 100%;
  margin-top: -50px;
}
.coming-soon-image03 {
  width: 100%;
  margin-top: -200px;
}
.coming-soon-image04 {
  width: 100%;
  margin-top: -50px;
}
.coming-soon-image05 {
  width: 100%;
}
.coming-soon-image06 {
  width: 100%;
}
.coming-soon-image07 {
  width: 100%;
  margin-top: -200px;
}
.coming-soon-image08 {
  width: 100%;
  margin-top: -50px;
}
.coming-soon-image09 {
  width: 100%;
}
.coming-soon-image10 {
  width: 100%;
}
.coming-soon-image11 {
  width: 100%;
  margin-top: -200px;
}
.coming-soon-image12 {
  width: 100%;
}
.coming-soon-image13 {
  width: 100%;
}
.coming-soon-container2 {
  flex: 0 0 auto;
  width: 40%;
  display: flex;
  z-index: 2;
  align-self: flex-start;
  margin-top: var(--dl-space-space-sixunits);
  align-items: flex-start;
  padding-top: var(--dl-space-space-tripleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-tripleunit);
}
.coming-soon-text {
  width: 391px;
  height: 105px;
  font-size: 4rem;
  margin-bottom: var(--dl-space-space-halfunit);
  background-image: linear-gradient(315deg, rgb(255, 53, 175) 1.00%,rgb(156, 94, 232) 100.00%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.coming-soon-text1 {
  color: var(--dl-color-gray-white);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
}
.coming-soon-container3 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.coming-soon-textinput {
  width: 100%;
  height: 40px;
  transition: 0.3s;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-secondary-100);
  margin-right: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-triplequarterunit);
  border-radius: var(--dl-radius-radius-radius5);
  padding-right: var(--dl-space-space-triplequarterunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.coming-soon-textinput:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #e9aede;
  border-color: var(--dl-color-pink-200);
}
.coming-soon-navlink {
  display: contents;
}
.coming-soon-component1 {
  text-decoration: none;
}
@media(max-width: 991px) {
  .coming-soon-container1 {
    background-size: auto;
  }
  .coming-soon-main {
    justify-content: flex-start;
  }
  .coming-soon-grid {
    top: 40%;
    left: auto;
    right: -6rem;
    bottom: -6rem;
  }
  .coming-soon-image {
    width: 120px;
  }
  .coming-soon-image01 {
    width: 120px;
  }
  .coming-soon-image02 {
    width: 120px;
  }
  .coming-soon-image03 {
    width: 120px;
  }
  .coming-soon-image04 {
    width: 120px;
  }
  .coming-soon-image05 {
    width: 120px;
  }
  .coming-soon-image06 {
    width: 120px;
  }
  .coming-soon-image07 {
    width: 120px;
  }
  .coming-soon-image08 {
    width: 120px;
  }
  .coming-soon-image09 {
    width: 120px;
  }
  .coming-soon-image10 {
    width: 120px;
  }
  .coming-soon-image11 {
    width: 120px;
  }
  .coming-soon-image12 {
    width: 120px;
    margin-top: -50px;
  }
  .coming-soon-image13 {
    width: 120px;
  }
  .coming-soon-container2 {
    width: 70%;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: var(--dl-space-space-tripleunit);
    margin-bottom: 0px;
    padding-right: var(--dl-space-space-tripleunit);
  }
}
@media(max-width: 767px) {
  .coming-soon-grid {
    right: 0;
  }
  .coming-soon-image {
    width: 100px;
  }
  .coming-soon-image01 {
    width: 100px;
  }
  .coming-soon-image02 {
    width: 100px;
  }
  .coming-soon-image03 {
    width: 100px;
  }
  .coming-soon-image04 {
    width: 100px;
  }
  .coming-soon-image05 {
    width: 100px;
  }
  .coming-soon-image06 {
    width: 100px;
  }
  .coming-soon-image07 {
    width: 100px;
  }
  .coming-soon-image08 {
    width: 100px;
  }
  .coming-soon-image09 {
    width: 100px;
  }
  .coming-soon-image10 {
    width: 100px;
  }
  .coming-soon-image11 {
    width: 100px;
  }
  .coming-soon-image12 {
    width: 100px;
  }
  .coming-soon-image13 {
    width: 100px;
  }
  .coming-soon-container2 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .coming-soon-container3 {
    flex-direction: column;
  }
  .coming-soon-textinput {
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
