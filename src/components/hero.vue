<template>
  <section class="hero-hero" v-bind:class="rootClassName">
    <div class="hero-container">
      <div class="hero-code-embed">
        <DangerousHTML
          html="
  <div id='waifu-toggle'> <span>看板娘</span> </div>
              <div id='waifu'>
  
                <div id='waifu-tips'></div> <canvas id='live2d' width='600' height='600'></canvas>
                <div id='waifu-tool'></div>
              </div>"
        ></DangerousHTML>
      </div>
      <header class="hero-header"></header>
    </div>
    <div class="hero-chat">
      <div class="hero-chatbotcode">
        <DangerousHTML
          html="
  <style>
  /* chatbox */
  .chatbox {
  	position: relative;
  	width: 750px;
  	height: 100%;
  	background: #fff;
  	border-radius: 10px;
  	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  	font-family: 'Poppins', sans-serif;
  	overflow: hidden;
  }
  
  .chatbox .chatheader {
  	background: #fff;
  	color: #81077d;
  	font-size: 18px;
  	font-weight: 600;
  	padding: 10px;
  	border-bottom: 1px solid #ccc;
  	text-align: center;
  }
  
  .chatbox .chatheader .close {
  	position: absolute;
  	top: 10px;
  	right: 10px;
  	cursor: pointer;
  }
  
  .chatbox .message-container {
  	height: 360px;
  	overflow-y: scroll;
  	padding: 10px;
  }
  
  .chatbox .input-container {
  	position: absolute;
  	bottom: 0;
  	left: 0;
  	width: 100%;
  	padding: 10px;
  	background: #f5e5f3;
  }
  
  .chatbox .input-container input[type='text'] {
  	width: 85%;
  	padding: 10px;
  	margin-left: 10px;
  	border-radius: 20px;
  	border: none;
  	outline: none;
  }
  
  .chatbox .input-container button {
  	background: #dd88ff;
  	color: #fff;
  	border: none;
  	padding: 10px;
  	border-radius: 20px;
  	cursor: pointer;
  	margin-left: 10px;
  }
  
  .message-right {
  	background-color: #e5e5ea;
  	color: #333;
  	border-radius: 20px;
  	word-break: break-all;
  	padding: 10px 25px 10px 25px;
  	max-width: 85%;
  	margin-bottom: 10px;
  	position: relative;
  	transform: translateX(+50px);
  }
  
  .message-right:after {
  	content: '';
  	position: absolute;
  	bottom: 0;
  	right: 0;
  	border-width: 12px 0 0 20px;
  	border-style: solid;
  	border-color: #e5e5ea transparent transparent transparent;
  }
  
  .message-left {
  	background-color: hsl(328, 46%, 89%);
  	color: #333;
  	border-radius: 20px;
  	word-break: break-all;
  	padding: 10px 25px 10px 25px;
  	max-width: 85%;
  	margin-bottom: 10px;
  	position: relative;
  	transform: translateX(20px);
  }
  
  .message:after {
  	content: '';
  	position: absolute;
  	bottom: 0;
  	left: -8px;
  	border-width: 25px 15px 5px 15px;
  	border-style: solid;
  	border-color: #e5e5ea transparent transparent transparent;
  }
  </style>
  <div class='chatbox' id='chatbox'>
              <div class='chatheader'>
                Chatbox
                <span class='close' id='Xclose'>X</span> <!-- close button -->
              </div>
              <div class='message-container' id='message-container'></div> <!-- message container -->
              <div class='input-container' id='input-container'>
                <span>
                  <input id='chatInput' type='text' placeholder='Type your message'>
                  <button id='buttonSend'>Send</button>
                </span>
              </div>
            </div>
  "
        ></DangerousHTML>
      </div>
    </div>
  </section>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'Hero',
  props: {
    text: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    text1: {
      type: String,
      default: 'Get started\n',
    },
    rootClassName: String,
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.hero-hero {
  flex: 1;
  width: auto;
  height: 100vh;
  display: flex;
  position: relative;
  align-self: flex-start;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit7);
  padding-left: var(--dl-space-space-halfunit7);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-halfunit7);
  flex-direction: column;
}
.hero-container {
  width: 646px;
  height: 333px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
}
.hero-code-embed {
  height: 324px;
}
.hero-header {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  margin-top: 140px;
  align-items: center;
  flex-direction: column;
}
.hero-chat {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-self: center;
  margin-top: 0px;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: flex-start;
}
.hero-chatbotcode {
  width:  760px;
  height: 50vh;
  align-self: center;
}
@media(max-width: 991px) {
  .hero-hero {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .hero-header {
    width: 100%;
    max-width: 1200px;
  }
}
@media(max-width: 767px) {
  .hero-hero {
    height: 620px;
    position: relative;
    padding-bottom: 180px;
    background-color: var(--dl-color-template-blue-bg);
  }
  .hero-header {
    height: 100%;
    margin-top: var(--dl-space-space-fourunits);
    justify-content: center;
  }
  .hero-chat {
    top: 520px;
    width: 90%;
    border-width: 10px;
    border-radius: 45px;
  }
}
@media(max-width: 479px) {
  .hero-hero {
    padding-bottom: 160px;
  }
  .hero-chat {
    top: 500px;
  }
}
</style>
