<template>
  <div class="personal-container">
    <app-header rootClassName="header-root-class-name1"></app-header>
    <div class="personal-container01">
      <div class="personal-container02">
        <img
          id="icon"
          alt="image"
          src="/OIP.jpg"
          class="personal-image"
        />
        <span class="personal-text">嘉心糖</span>
        <span class="personal-text01">好想做嘉然小姐的狗啊</span>
        <label id="fans" for="icon" class="personal-text02">
          <span>粉丝</span>
          <br />
          <span>99</span>
          <br />
        </label>
        <label class="personal-text07">
          <span>获赞</span>
          <br />
          <span>99</span>
          <br />
        </label>
        <label class="personal-text12">
          <span>关注</span>
          <br />
          <span>99</span>
          <br />
        </label>
        <span class="personal-text17">LV1</span>
        <span class="personal-text18">  PLUS VIP  </span>
      </div>
    </div>
    <div class="personal-container03">
      <a href="#MyModel" class="personal-link">我的模型</a>
      <a href="#MyCollection" class="personal-link1">我的收藏</a>
      <a href="#MyParticipation" class="personal-link2">我参与的</a>
      <svg viewBox="0 0 950.8571428571428 1024" class="personal-icon">
        <path
          d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="personal-icon02">
        <path
          d="M1024 483.429c0 44.571-25.143 82.857-62.286 101.714 4.571 17.714 6.857 36 6.857 54.857 0 180.571-204 326.857-455.429 326.857-250.857 0-454.857-146.286-454.857-326.857 0-18.286 2.286-36.571 6.286-53.714-38.286-18.857-64.571-57.714-64.571-102.857 0-62.857 50.857-113.714 113.714-113.714 32.571 0 61.714 13.714 82.857 36 77.143-53.714 180-88.571 294.286-92.571l66.286-297.714c2.286-10.286 13.143-17.143 23.429-14.857l210.857 46.286c13.714-27.429 42.857-46.857 76-46.857 47.429 0 85.714 38.286 85.714 85.143 0 47.429-38.286 85.714-85.714 85.714-46.857 0-85.143-38.286-85.143-85.143l-190.857-42.286-59.429 269.714c114.857 3.429 218.857 37.714 296.571 91.429 20.571-21.714 49.714-34.857 81.714-34.857 62.857 0 113.714 50.857 113.714 113.714zM238.857 597.143c0 47.429 38.286 85.714 85.143 85.714 47.429 0 85.714-38.286 85.714-85.714 0-46.857-38.286-85.143-85.714-85.143-46.857 0-85.143 38.286-85.143 85.143zM701.714 800c8.571-8.571 8.571-21.143 0-29.714-8-8-21.143-8-29.143 0-34.286 34.857-108 46.857-160.571 46.857s-126.286-12-160.571-46.857c-8-8-21.143-8-29.143 0-8.571 8-8.571 21.143 0 29.714 54.286 54.286 158.857 58.286 189.714 58.286s135.429-4 189.714-58.286zM700 682.857c46.857 0 85.143-38.286 85.143-85.714 0-46.857-38.286-85.143-85.143-85.143-47.429 0-85.714 38.286-85.714 85.143 0 47.429 38.286 85.714 85.714 85.714z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="personal-icon04">
        <path
          d="M365.714 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM585.143 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM804.571 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1024 512c0 202.286-229.143 365.714-512 365.714-41.714 0-82.286-3.429-120.571-10.286-65.143 65.143-150.286 109.714-248.571 130.857-15.429 2.857-32 5.714-49.143 7.429-9.143 1.143-17.714-5.143-20-13.714v0c-2.286-9.143 4.571-14.857 11.429-21.143 36-33.714 78.857-60.571 93.714-181.143-109.143-66.857-178.857-166.286-178.857-277.714 0-202.286 229.143-365.714 512-365.714s512 163.429 512 365.714z"
        ></path>
      </svg>
    </div>
    <div class="personal-container04">
      <div class="personal-container05">
        <ul class="personal-ul list">
          <li class="personal-li list-item">
            <span id="MyModel" class="personal-text19">我的模型</span>
            <div class="personal-container06">
              <div class="personal-container07">
                <img
                  alt="image"
                  src="/nahida_ico-200h.png"
                  class="personal-image01"
                />
                <span class="personal-text20">原神-Nahida</span>
              </div>
              <div class="personal-container08">
                <img
                  alt="image"
                  src="/mmexport1685010797452-300w.png"
                  class="personal-image02"
                />
                <span class="personal-text21">青猪-さくらじま まい</span>
              </div>
              <div class="personal-container09">
                <img
                  alt="image"
                  src="/yukinoshita_yukino-300w.png"
                  class="personal-image03"
                />
                <span class="personal-text22">春物-雪ノ下 雪乃</span>
              </div>
            </div>
          </li>
          <li class="list-item">
            <span id="MyCollection" class="personal-text23">我的收藏</span>
            <div class="personal-container10">
              <div class="personal-container11">
                <img
                  alt="image"
                  src="/mmexport1685014970699-300w.png"
                  class="personal-image04"
                />
                <span class="personal-text24">lycoris-锦木前束</span>
              </div>
              <div class="personal-container12">
                <img
                  alt="image"
                  src="/mmexport1685014983104-300w.png"
                  class="personal-image05"
                />
                <span class="personal-text25">lycoris-井之上泷奈</span>
              </div>
              <div class="personal-container13">
                <img
                  alt="image"
                  src="/mmexport1685014477871-300w.png"
                  class="personal-image06"
                />
                <span class="personal-text26">原神-枫原万叶</span>
              </div>
              <div class="personal-container14">
                <img
                  alt="image"
                  src="/mmexport1685011043308-300w.png"
                  class="personal-image07"
                />
                <span class="personal-text27">鬼灭-甘露寺蜜璃</span>
              </div>
            </div>
          </li>
          <li class="personal-li2 list-item">
            <div class="personal-container15">
              <svg viewBox="0 0 1024 1024" class="personal-icon06">
                <path
                  d="M451.669 281.003c-33.323 33.237-33.323 87.339 0 120.661l67.669 67.669h-309.077c-47.104 0-85.333 38.187-85.333 85.333 0 47.104 38.229 85.333 85.333 85.333h309.077l-67.669 67.669c-33.323 33.237-33.323 87.339 0 120.661 16.683 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003l273.664-273.664-273.664-273.664c-33.323-33.323-87.339-33.323-120.661 0z"
                ></path>
              </svg>
              <span class="personal-text28">更多</span>
            </div>
            <div class="personal-container16">
              <svg viewBox="0 0 1024 1024" class="personal-icon08">
                <path
                  d="M451.669 281.003c-33.323 33.237-33.323 87.339 0 120.661l67.669 67.669h-309.077c-47.104 0-85.333 38.187-85.333 85.333 0 47.104 38.229 85.333 85.333 85.333h309.077l-67.669 67.669c-33.323 33.237-33.323 87.339 0 120.661 16.683 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003l273.664-273.664-273.664-273.664c-33.323-33.323-87.339-33.323-120.661 0z"
                ></path>
              </svg>
              <span class="personal-text29">更多</span>
            </div>
            <span id="MyParticipation" class="personal-text30">我参与的</span>
            <div class="personal-container17">
              <ul class="list">
                <li class="list-item">
                  <div class="personal-container18">
                    <div class="personal-container19">
                      <svg viewBox="0 0 1024 1024" class="personal-icon10">
                        <path
                          d="M451.669 281.003c-33.323 33.237-33.323 87.339 0 120.661l67.669 67.669h-309.077c-47.104 0-85.333 38.187-85.333 85.333 0 47.104 38.229 85.333 85.333 85.333h309.077l-67.669 67.669c-33.323 33.237-33.323 87.339 0 120.661 16.683 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003l273.664-273.664-273.664-273.664c-33.323-33.323-87.339-33.323-120.661 0z"
                        ></path>
                      </svg>
                      <span class="personal-text31">更多</span>
                    </div>
                    <img
                      alt="image"
                      src="/nahida_ico-200h.png"
                      class="personal-image08"
                    />
                    <span class="personal-text32">
                      我是纳西妲的狗！给大家分享纳西妲模型~
                    </span>
                    <span class="personal-text33">这是一个纳西妲的模型</span>
                    <div class="personal-container20">
                      <svg viewBox="0 0 1024 1024" class="personal-icon12">
                        <path
                          d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
                        ></path></svg
                      ><svg viewBox="0 0 1024 1024" class="personal-icon14">
                        <path
                          d="M932 550l-114 262q-26 42-74 42h-346q-40 0-70-30t-30-70v-334q0-36 26-62l274-272 18 20q24 24 38 52 6 14 4 28l-40 198h236q34 0 59 26t25 60v46q0 18-6 34zM86 854v-470h84q18 0 31 12t13 30v384q0 18-13 31t-31 13h-84z"
                        ></path>
                      </svg>
                      <span class="personal-text34">99+</span>
                      <span class="personal-text35">99+</span>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="personal-container21">
                    <img
                      alt="image"
                      src="/chenrui-200h.png"
                      class="personal-image09"
                    />
                    <span class="personal-text36">
                      鼠鼠我啊，最喜欢赚二次元的（）了
                    </span>
                    <span class="personal-text37">这是一个Cherry鼠鼠模型</span>
                    <div class="personal-container22">
                      <svg viewBox="0 0 1024 1024" class="personal-icon16">
                        <path
                          d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
                        ></path></svg
                      ><svg viewBox="0 0 1024 1024" class="personal-icon18">
                        <path
                          d="M932 550l-114 262q-26 42-74 42h-346q-40 0-70-30t-30-70v-334q0-36 26-62l274-272 18 20q24 24 38 52 6 14 4 28l-40 198h236q34 0 59 26t25 60v46q0 18-6 34zM86 854v-470h84q18 0 31 12t13 30v384q0 18-13 31t-31 13h-84z"
                        ></path>
                      </svg>
                      <span class="personal-text38">99+</span>
                      <span class="personal-text39">99+</span>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="personal-container23">
                    <img
                      alt="image"
                      src="/mmexport1685010797452-300w.png"
                      class="personal-image10"
                    />
                    <span class="personal-text40">人活着就是为了（）！</span>
                    <span class="personal-text41">这是一个樱岛麻衣的模型</span>
                    <div class="personal-container24">
                      <svg viewBox="0 0 1024 1024" class="personal-icon20">
                        <path
                          d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
                        ></path></svg
                      ><svg viewBox="0 0 1024 1024" class="personal-icon22">
                        <path
                          d="M932 550l-114 262q-26 42-74 42h-346q-40 0-70-30t-30-70v-334q0-36 26-62l274-272 18 20q24 24 38 52 6 14 4 28l-40 198h236q34 0 59 26t25 60v46q0 18-6 34zM86 854v-470h84q18 0 31 12t13 30v384q0 18-13 31t-31 13h-84z"
                        ></path>
                      </svg>
                      <span class="personal-text42">99+</span>
                      <span class="personal-text43">99+</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="personal-container25">
        <div class="personal-container26">
          <span class="personal-text44">个人信息</span>
          <svg viewBox="0 0 1024 1024" class="personal-icon24">
            <path
              d="M191.429 774.857c-1.143 0-2.286-0.571-3.429-1.143-66.857-44.571-133.714-117.714-176-185.714-8-11.429-12-25.143-12-39.429 0-29.714 20.571-53.714 37.143-76 66.286-90.286 154.857-164.571 258.286-208.571-8.571-15.429-62.857-110.286-62.857-120.571 0-6.857 4-13.143 9.714-16.571 11.429-6.286 62.857-36.571 73.143-36.571 6.286 0 12.571 3.429 16 9.143l70.857 130.857c36-7.429 73.143-10.857 109.714-10.857 206.857 0 390.857 117.143 500.571 289.714 7.429 11.429 11.429 25.143 11.429 39.429s-4 28-11.429 39.429c-68 106.857-167.429 195.429-284 245.143 8.571 15.429 62.857 110.286 62.857 120.571 0 6.857-3.429 13.143-9.714 16.571-11.429 6.286-62.857 36.571-72.571 36.571-6.857 0-13.143-3.429-16.571-9.143l-70.857-130.857-36.571-68-253.714-468.571 4-4c-19.429 8-38.286 16.571-56.571 26.857 6.857 13.143 279.429 513.714 279.429 517.714 0 2.857-2.286 4.571-5.143 5.143-12.571 2.857-28.571 1.714-41.143 1.714-6.286 0-32 1.143-34.286-4l-260.571-480.571c-16.571 12-32 25.143-46.857 38.857 12.571 22.286 230.857 424 230.857 427.429 0 4.571-2.857 5.714-6.286 5.714-9.714 0-85.714-23.429-88.571-28.571l-60.571-112.571-128-236c-16 19.429-30.857 39.429-44.571 60.571 7.429 10.857 17.143 22.286 23.429 33.714 8 14.857 100.571 183.429 100.571 186.857 0 2.857-2.857 5.714-5.714 5.714zM665.714 716.571l28 52c106.857-43.429 194.857-123.429 257.143-220-63.429-97.714-153.714-178.857-262.286-222.286 50.857 48.571 79.429 115.429 79.429 185.714 0 80.571-37.714 156.571-102.286 204.571zM484.571 365.714c0 14.857 12.571 27.429 27.429 27.429 31.429 0 61.714 12.571 84 34.857s34.857 52.571 34.857 84c0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-96-77.714-173.714-173.714-173.714-14.857 0-27.429 12.571-27.429 27.429zM693.714 328.571l-5.143-2.286 4 4z"
            ></path>
          </svg>
          <span class="personal-text45">UID:1000000</span>
          <span class="personal-text46">认证邮箱：123456789@163.com</span>
          <span class="personal-text47">等级：资深二次元</span>
          <span class="personal-text48">生日：1月1日</span>
          <span class="personal-text49">仅自己可见</span>
        </div>
        <div class="personal-container27">
          <span class="personal-text50">社交信息</span>
          <span class="personal-text51">B站：Cherry</span>
          <span class="personal-text52">微博：未设置</span>
          <span class="personal-text53">抖音：未设置</span>
        </div>
        <router-link to="/define-chatbot" class="personal-navlink">
          <div class="personal-container28">
            <span class="personal-text54">导入模型</span>
          </div>
        </router-link>
      </div>
    </div>
    <footer-gray rootClassName="footer-gray-root-class-name3"></footer-gray>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import FooterGray from '../components/footer-gray'

export default {
  name: 'Personal',
  components: {
    AppHeader,
    FooterGray,
  },
  metaInfo: {
    title: 'Personal - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'Personal - Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.personal-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(135deg, rgba(192, 232, 236, 0.38) 2.00%,rgba(217, 183, 234, 0.42) 100.00%);
}
.personal-container01 {
  width: 1263px;
  height: 188px;
  display: flex;
  align-items: flex-start;
}
.personal-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 167px;
  display: flex;
  position: relative;
  align-self: center;
  margin-top: 16px;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius75);
  justify-content: flex-start;
  background-image: linear-gradient(90deg, rgba(255, 0, 147, 0.14) 48.00%,rgb(44, 231, 234) 100.00%);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.personal-image {
  left: 40px;
  width: 78px;
  bottom: 20px;
  height: 78px;
  position: absolute;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.personal-text {
  top: 88px;
  left: 131px;
  color: var(--dl-color-secondary-600);
  position: absolute;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
}
.personal-text01 {
  top: 116px;
  left: 131px;
  position: absolute;
}
.personal-text02 {
  right: 200px;
  bottom: 15px;
  cursor: pointer;
  position: absolute;
  text-align: center;
  transition: 0.3s;
}

.personal-text07 {
  right: 60px;
  bottom: 15px;
  cursor: pointer;
  position: absolute;
  text-align: center;
}
.personal-text12 {
  right: 130px;
  bottom: 15px;
  cursor: pointer;
  position: absolute;
  text-align: center;
  transition: 0.3s;
}

.personal-text17 {
  top: 91px;
  left: 222px;
  color: var(--dl-color-primary-700);
  position: absolute;
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 700;
}
.personal-text18 {
  left: 250px;
  color: var(--dl-color-gray-900);
  bottom: 52px;
  position: absolute;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  border-radius: var(--dl-radius-radius-radius40);
  background-color: var(--dl-color-pink-200);
}
.personal-container03 {
  width: 1263px;
  height: 58px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  background-color: var(--dl-color-gray-white);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.personal-link {
  top: 15px;
  left: 100px;
  position: absolute;
  transition: 0.3s;
  text-decoration: none;
}
.personal-link:hover {
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: underline;
}
.personal-link1 {
  top: 15px;
  left: 300px;
  position: absolute;
  transition: 0.3s;
  text-decoration: none;
}
.personal-link1:hover {
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: underline;
}
.personal-link2 {
  top: 15px;
  left: 500px;
  position: absolute;
  transition: 0.3s;
  text-decoration: none;
}
.personal-link2:hover {
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: underline;
}
.personal-icon {
  top: 15px;
  fill: #efde62;
  left: 270px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-icon02 {
  top: 15px;
  fill: var(--dl-color-primary-logo);
  left: 70px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-icon04 {
  top: 15px;
  fill: var(--dl-color-primary-softpurple);
  left: 470px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-container04 {
  width: 1263px;
  height: 1333px;
  display: flex;
  position: relative;
  align-self: center;
  margin-top: 20px;
  align-items: flex-start;
}
.personal-container05 {
  flex: 0 0 auto;
  width: 856px;
  height: 1272px;
  display: inline-block;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  background-color: var(--dl-color-gray-white);
}
.personal-ul {
  height: 922px;
}
.personal-li {
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
}
.personal-text19 {
  color: var(--dl-color-primary-logo);
  width: 95%;
  display: block;
  font-size: 1.1rem;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  border-color: var(--dl-color-secondary-100);
  border-width: 1px;
  margin-bottom: 20px;
  border-top-width: 2px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.personal-container06 {
  width: 790px;
  height: 187px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: flex-start;
  overflow-wrap: break-word;
}
.personal-container07 {
  top: 0px;
  flex: 0 0 auto;
  left: 3%;
  width: 206px;
  cursor: pointer;
  height: 163px;
  display: inline-block;
  position: absolute;
  transition: 0.3s;
  align-items: flex-start;
}

.personal-image01 {
  width: 100%;
  height: 137px;
  object-fit: cover;
  transition: 0.3s;
}
.personal-image01:hover {
  width: 110%;
  height: 150px;
}
.personal-text20 {
  color: var(--dl-color-pink-100);
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}
.personal-text20:hover {
  text-decoration: underline;
}
.personal-container08 {
  top: 0px;
  flex: 0 0 auto;
  left: 38%;
  width: 206px;
  cursor: pointer;
  height: 176px;
  display: inline-block;
  position: absolute;
  align-items: flex-start;
}
.personal-image02 {
  width: 100%;
  height: 137px;
  object-fit: cover;
  transition: 0.3s;
}
.personal-image02:hover {
  width: 110%;
  height: 150px;
}
.personal-text21 {
  color: var(--dl-color-pink-100);
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}
.personal-text21:hover {
  text-decoration: underline;
}
.personal-container09 {
  top: 0px;
  flex: 0 0 auto;
  left: 72%;
  width: 206px;
  cursor: pointer;
  height: 176px;
  display: inline-block;
  position: absolute;
  align-items: flex-start;
}
.personal-image03 {
  width: 100%;
  height: 137px;
  object-fit: cover;
  transition: 0.3s;
}
.personal-image03:hover {
  width: 110%;
  height: 150px;
}
.personal-text22 {
  color: var(--dl-color-pink-100);
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}
.personal-text22:hover {
  text-decoration: underline;
}
.personal-text23 {
  color: #efde62;
  width: 95%;
  display: block;
  font-size: 1.1rem;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  border-color: var(--dl-color-secondary-100);
  border-width: 1px;
  margin-bottom: 20px;
  border-top-width: 2px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.personal-container10 {
  width: 790px;
  height: 384px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: flex-start;
  overflow-wrap: break-word;
}
.personal-container11 {
  top: 0px;
  flex: 0 0 auto;
  left: 3%;
  width: 206px;
  cursor: pointer;
  height: 163px;
  display: inline-block;
  position: absolute;
  align-items: flex-start;
}
.personal-image04 {
  width: 100%;
  height: 137px;
  object-fit: cover;
  transition: 0.3s;
}
.personal-image04:hover {
  width: 110%;
  height: 150px;
}
.personal-text24 {
  color: var(--dl-color-pink-100);
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}
.personal-text24:hover {
  text-decoration: underline;
}
.personal-container12 {
  top: 0px;
  flex: 0 0 auto;
  left: 38%;
  width: 206px;
  cursor: pointer;
  height: 176px;
  display: inline-block;
  position: absolute;
  align-items: flex-start;
}
.personal-image05 {
  width: 100%;
  height: 137px;
  object-fit: cover;
  transition: 0.3s;
}
.personal-image05:hover {
  width: 110%;
  height: 150px;
}
.personal-text25 {
  color: var(--dl-color-pink-100);
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}
.personal-text25:hover {
  text-decoration: underline;
}
.personal-container13 {
  top: 0px;
  flex: 0 0 auto;
  left: 72%;
  width: 206px;
  cursor: pointer;
  height: 176px;
  display: inline-block;
  position: absolute;
  align-items: flex-start;
}
.personal-image06 {
  width: 100%;
  height: 137px;
  object-fit: cover;
  transition: 0.3s;
}
.personal-image06:hover {
  width: 110%;
  height: 150px;
}
.personal-text26 {
  color: var(--dl-color-pink-100);
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}
.personal-text26:hover {
  text-decoration: underline;
}
.personal-container14 {
  top: 202px;
  flex: 0 0 auto;
  left: 3%;
  width: 206px;
  cursor: pointer;
  height: 176px;
  display: inline-block;
  position: absolute;
  align-items: flex-start;
}
.personal-image07 {
  width: 100%;
  height: 137px;
  object-fit: cover;
  transition: 0.3s;
}
.personal-image07:hover {
  width: 110%;
  height: 150px;
}
.personal-text27 {
  color: var(--dl-color-pink-100);
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
}
.personal-text27:hover {
  text-decoration: underline;
}
.personal-li2 {
  position: relative;
}
.personal-container15 {
  top: -690px;
  flex: 0 0 auto;
  right: 9px;
  width: 77px;
  cursor: pointer;
  height: 41px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.personal-icon06 {
  fill: var(--dl-color-primary-softpurple);
  width: 26px;
  height: 26px;
}
.personal-text28 {
  color: var(--dl-color-primary-softpurple);
  font-size: 1.1rem;
}
.personal-container16 {
  top: -430px;
  flex: 0 0 auto;
  right: 9px;
  width: 77px;
  cursor: pointer;
  height: 41px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.personal-icon08 {
  fill: var(--dl-color-primary-softpurple);
  width: 26px;
  height: 26px;
}
.personal-text29 {
  color: var(--dl-color-primary-softpurple);
  font-size: 1.1rem;
}
.personal-text30 {
  color: var(--dl-color-primary-softpurple);
  width: 95%;
  display: block;
  font-size: 1.1rem;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  border-color: var(--dl-color-secondary-100);
  border-width: 1px;
  margin-bottom: 20px;
  border-top-width: 2px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.personal-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.personal-container18 {
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  height: 131px;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.personal-container19 {
  top: -65px;
  flex: 0 0 auto;
  right: 9px;
  width: 77px;
  cursor: pointer;
  height: 41px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.personal-icon10 {
  fill: var(--dl-color-primary-softpurple);
  width: 26px;
  height: 26px;
}
.personal-text31 {
  color: var(--dl-color-primary-softpurple);
  font-size: 1.1rem;
}
.personal-image08 {
  width: 142px;
  height: 129px;
  object-fit: cover;
}
.personal-text32 {
  top: -1px;
  left: 217px;
  position: absolute;
  font-size: 1.2rem;
}
.personal-text33 {
  top: 38px;
  left: 183px;
  position: absolute;
}
.personal-container20 {
  flex: 0 0 auto;
  right: 0px;
  width: 205px;
  bottom: 0px;
  height: 44px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.personal-icon12 {
  top: 6px;
  fill: var(--dl-color-blue-500);
  left: 100px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-icon14 {
  top: 5px;
  fill: #f31313;
  left: 25px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-text34 {
  top: 5px;
  left: 130px;
  position: absolute;
}
.personal-text35 {
  top: 5px;
  left: 54px;
  position: absolute;
}
.personal-container21 {
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  height: 131px;
  display: flex;
  position: relative;
  margin-top: 20px;
  align-items: flex-start;
}
.personal-image09 {
  width: 142px;
  height: 129px;
  object-fit: cover;
}
.personal-text36 {
  top: -1px;
  left: 217px;
  position: absolute;
  font-size: 1.2rem;
}
.personal-text37 {
  top: 38px;
  left: 183px;
  position: absolute;
}
.personal-container22 {
  flex: 0 0 auto;
  right: 0px;
  width: 205px;
  bottom: 0px;
  height: 44px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.personal-icon16 {
  top: 6px;
  fill: var(--dl-color-blue-500);
  left: 100px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-icon18 {
  top: 5px;
  fill: #f31313;
  left: 25px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-text38 {
  top: 5px;
  left: 130px;
  position: absolute;
}
.personal-text39 {
  top: 5px;
  left: 54px;
  position: absolute;
}
.personal-container23 {
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer;
  height: 131px;
  display: flex;
  position: relative;
  margin-top: 20px;
  align-items: flex-start;
}
.personal-image10 {
  width: 142px;
  height: 129px;
  object-fit: cover;
}
.personal-text40 {
  top: -1px;
  left: 217px;
  position: absolute;
  font-size: 1.2rem;
}
.personal-text41 {
  top: 38px;
  left: 183px;
  position: absolute;
}
.personal-container24 {
  flex: 0 0 auto;
  right: 0px;
  width: 205px;
  bottom: 0px;
  height: 44px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.personal-icon20 {
  top: 6px;
  fill: var(--dl-color-blue-500);
  left: 100px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-icon22 {
  top: 5px;
  fill: #f31313;
  left: 25px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.personal-text42 {
  top: 5px;
  left: 130px;
  position: absolute;
}
.personal-text43 {
  top: 5px;
  left: 54px;
  position: absolute;
}
.personal-container25 {
  flex: 0 0 auto;
  width: 360px;
  height: 957px;
  display: flex;
  align-self: stretch;
  align-items: flex-end;
  margin-left: 49px;
  flex-direction: column;
  justify-content: flex-start;
}
.personal-container26 {
  flex: 0 0 auto;
  width: 100%;
  height: 185px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-bottom: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-white);
}
.personal-text44 {
  color: var(--dl-color-pink-300);
  display: block;
  font-size: 1.2rem;
  text-align: center;
  margin-left: 40%;
  margin-right: 0%;
}
.personal-icon24 {
  top: 25px;
  fill: #D9D9D9;
  left: 245px;
  width: 22px;
  height: 22px;
  position: absolute;
}
.personal-text45 {
  top: 45px;
  left: 61px;
  color: var(--dl-color-pink-softpink);
  position: absolute;
}
.personal-text46 {
  top: 105px;
  left: 61px;
  color: var(--dl-color-pink-softpink);
  position: absolute;
}
.personal-text47 {
  top: 135px;
  left: 61px;
  color: var(--dl-color-pink-softpink);
  position: absolute;
}
.personal-text48 {
  top: 75px;
  left: 61px;
  color: var(--dl-color-pink-softpink);
  position: absolute;
}
.personal-text49 {
  top: 25px;
  color: var(--dl-color-secondary-100);
  right: 15px;
  position: absolute;
  font-size: 0.9rem;
}
.personal-container27 {
  width: 100%;
  height: 148px;
  display: flex;
  position: relative;
  margin-top: 20px;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-bottom: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-white);
}
.personal-text50 {
  color: var(--dl-color-pink-300);
  display: block;
  font-size: 1.2rem;
  text-align: center;
  margin-left: 40%;
  margin-right: 0%;
}
.personal-text51 {
  top: 45px;
  left: 61px;
  color: var(--dl-color-pink-softpink);
  position: absolute;
}
.personal-text52 {
  top: 105px;
  left: 61px;
  color: var(--dl-color-pink-softpink);
  position: absolute;
}
.personal-text53 {
  top: 75px;
  left: 61px;
  color: var(--dl-color-pink-softpink);
  position: absolute;
}
.personal-navlink {
  display: contents;
}
.personal-container28 {
  width: 258px;
  height: 122px;
  display: flex;
  position: relative;
  align-self: center;
  margin-top: 30px;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius40);
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-pink-softpink);
}
.personal-container28:hover {
  cursor: pointer;
  background-color: var(--dl-color-pink-200);
}
.personal-text54 {
  color: var(--dl-color-gray-900);
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
}
</style>
