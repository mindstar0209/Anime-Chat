<template>
  <div class="define-chatbot-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <div class="define-chatbot-testimonial-card">
      <h1 class="define-chatbot-text">定义ChatBot</h1>
      <img
        alt="profile"
        src="https://psc2.cf2.poecdn.net/sFiQGeXRumKKpK7t90noy0Xl/_next/static/media/defaultAvatar.7e5c73d2.png"
        class="define-chatbot-image"
      />
      <button class="define-chatbot-button button">上传头像</button>
      <div class="define-chatbot-feature-card">
        <svg viewBox="0 0 1024 1024" class="define-chatbot-icon">
          <path
            d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
          ></path>
        </svg>
        <h2 class="define-chatbot-text01">角色名称</h2>
        <span class="define-chatbot-text02">
          请输入角色名称，长度不超过12个字符。
        </span>
        <input
          type="text"
          placeholder="角色名称"
          class="define-chatbot-textinput input"
        />
      </div>
      <div class="define-chatbot-feature-card1">
        <svg viewBox="0 0 1024 1024" class="define-chatbot-icon02">
          <path
            d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
          ></path>
        </svg>
        <h2 class="define-chatbot-text03">角色描述</h2>
        <span class="define-chatbot-text04">请输入角色描述。</span>
        <textarea
          placeholder="角色描述会被显示在展示页面。"
          class="define-chatbot-textarea textarea"
        ></textarea>
      </div>
      <div class="define-chatbot-feature-card2">
        <svg viewBox="0 0 1024 1024" class="define-chatbot-icon04">
          <path
            d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
          ></path>
        </svg>
        <h2 class="define-chatbot-text05">Prompt</h2>
        <span class="define-chatbot-text06">
          与此机器人的所有对话都将以您的提示开始，但聊天中的用户将看不到它。
          如果您希望提示消息对用户可见，请考虑改用介绍消息。
        </span>
        <textarea
          placeholder="例如，您可以以第二人称给出指示：  像海盗一样跟我说话。假设您是《权力的游戏》中的角色之一。我会问你几个问题来猜你是谁。说话就像你是来自安大略小镇的曲棍球兄弟 - 你是一位喜欢烤馅饼的南方厨师，你用南方口音讨论所有关于烘焙的事情。"
          class="define-chatbot-textarea1 textarea"
        ></textarea>
      </div>
      <div class="define-chatbot-container1">
        <div class="define-chatbot-testimonial"></div>
        <div class="define-chatbot-feature-card3">
          <svg viewBox="0 0 1024 1024" class="define-chatbot-icon06">
            <path
              d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
            ></path>
          </svg>
          <h2 class="define-chatbot-text07">角色模型</h2>
          <div class="define-chatbot-container2">
            <button class="define-chatbot-button1 button">上传</button>
          </div>
        </div>
      </div>
      <div class="define-chatbot-feature-card4">
        <svg viewBox="0 0 1024 1024" class="define-chatbot-icon08">
          <path
            d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
          ></path>
        </svg>
        <h2 class="define-chatbot-text08">聊天背景</h2>
        <div class="define-chatbot-container3">
          <button class="define-chatbot-button2 button">上传</button>
        </div>
      </div>
      <div class="define-chatbot-feature-card5">
        <svg viewBox="0 0 1024 1024" class="define-chatbot-icon10">
          <path
            d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
          ></path>
        </svg>
        <h2 class="define-chatbot-text09">背景音乐</h2>
        <div class="define-chatbot-container4">
          <button class="define-chatbot-button3 button">上传</button>
        </div>
      </div>
      <div class="define-chatbot-feature-card6">
        <svg viewBox="0 0 1024 1024" class="define-chatbot-icon12">
          <path
            d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
          ></path>
        </svg>
        <h2 class="define-chatbot-text10">AI语音</h2>
        <span class="define-chatbot-text11">待开发。</span>
      </div>
    </div>
    <footer-gray rootClassName="footer-gray-root-class-name4"></footer-gray>
    <div class="define-chatbot-container5"></div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import FooterGray from '../components/footer-gray'

export default {
  name: 'DefineChatbot',
  components: {
    AppHeader,
    FooterGray,
  },
  metaInfo: {
    title: 'DefineChatbot - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'DefineChatbot - Soft UI Pro',
      },
    ],
  },
}
</script>

<style scoped>
.define-chatbot-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(135deg, rgba(192, 232, 236, 0.38) 2.00%,rgba(217, 183, 234, 0.42) 100.00%);
}
.define-chatbot-testimonial-card {
  width: auto;
  height: 1679px;
  display: flex;
  padding: 32px;
  max-width: 1400px;
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(150, 150, 150, 0.15);
  align-items: center;
  padding-top: 32px;
  border-color: rgba(187, 164, 193, 0.49);
  border-width: 1px;
  flex-direction: column;
  justify-content: space-between;
  border-top-width: 0px;
  border-bottom-width: 0px;
}
.define-chatbot-text {
  margin-top: var(--dl-space-space-fourunits);
}
.define-chatbot-image {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
  margin-bottom: var(--dl-space-space-unit);
}
.define-chatbot-button {
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-feature-card {
  width: auto;
  height: 191px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.define-chatbot-icon {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 30px;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text01 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text02 {
  color: var(--dl-color-gray-700);
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-textinput {
  color: var(--dl-color-gray-700);
  width: 743px;
  height: 37px;
  border-color: var(--dl-color-primary-softpurple);
  border-width: 1px;
}
.define-chatbot-feature-card1 {
  width: auto;
  height: 229px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.define-chatbot-icon02 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text03 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text04 {
  color: var(--dl-color-gray-700);
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-textarea {
  color: var(--dl-color-gray-700);
  width: 740px;
  height: 75px;
  border-color: var(--dl-color-primary-softpurple);
}
.define-chatbot-feature-card2 {
  width: 771px;
  height: 273px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.define-chatbot-icon04 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text05 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text06 {
  color: var(--dl-color-gray-700);
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-textarea1 {
  color: var(--dl-color-gray-700);
  width: 739px;
  height: 110px;
  border-color: var(--dl-color-primary-softpurple);
}
.define-chatbot-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.define-chatbot-testimonial {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.define-chatbot-feature-card3 {
  width: 773px;
  height: 155px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.define-chatbot-icon06 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text07 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-container2 {
  width: 726px;
  height: 35px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.define-chatbot-button1 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.define-chatbot-feature-card4 {
  width: 773px;
  height: 155px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.define-chatbot-icon08 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text08 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-container3 {
  width: 726px;
  height: 35px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.define-chatbot-button2 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.define-chatbot-feature-card5 {
  width: 773px;
  height: 155px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.define-chatbot-icon10 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text09 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-container4 {
  width: 726px;
  height: 35px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.define-chatbot-button3 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.define-chatbot-feature-card6 {
  width: 773px;
  height: 155px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.define-chatbot-icon12 {
  fill: var(--dl-color-gray-500);
  width: 2rem;
  height: 2rem;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text10 {
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-text11 {
  color: var(--dl-color-gray-700);
  margin-bottom: var(--dl-space-space-halfunit);
}
.define-chatbot-container5 {
  flex: 0 0 auto;
  width: 60%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 767px) {
  .define-chatbot-testimonial-card {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .define-chatbot-testimonial-card {
    padding-top: 32px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: 32px;
  }
  .define-chatbot-text01 {
    font-style: normal;
    font-weight: 600;
  }
  .define-chatbot-text03 {
    font-style: normal;
    font-weight: 600;
  }
  .define-chatbot-text05 {
    font-style: normal;
    font-weight: 600;
  }
  .define-chatbot-text07 {
    font-style: normal;
    font-weight: 600;
  }
  .define-chatbot-text08 {
    font-style: normal;
    font-weight: 600;
  }
  .define-chatbot-text09 {
    font-style: normal;
    font-weight: 600;
  }
  .define-chatbot-text10 {
    font-style: normal;
    font-weight: 600;
  }
}
</style>
