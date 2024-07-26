<template>
  <!--  -->
  <div class="chat-container">
   <audio ref="audio" :src="audioSrc"></audio>
    <div  class="chat-container1"  ref="header"    >
      <app-header rootClassName="header-root-class-name3"></app-header>
    <div class="chat-container0" @mouseover="showHeader"    @mouseout="hideHeader" ></div>
  </div>
    <div class="chat-container2">
      <!-- <app-hero rootClassName="hero-root-class-name"></app-hero> -->


      <section class="hero-hero hero-root-class-name">
        <div class="hero-container">
          <div class="hero-code-embed">
            <DangerousHTML html="
        <div id='waifu-toggle'> <span>看板娘</span> </div>
                    <div id='waifu'>
  
                      <div id='waifu-tips'></div> <canvas id='live2d' width='600' height='600'></canvas>
                      <div id='waifu-tool'></div>
                    </div>"></DangerousHTML>
          </div>
          <header class="hero-header"></header>
        </div>
        <div class="hero-chat">
          <div class="hero-chatbotcode">
            <DangerousHTML html="
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
        	height: 260px;
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
  .play-audio { 
    fill: var(--dl-color-pink-100);
     cursor: pointer;
    position: absolute; 
    top: 50%; 
    right: -25px; 
    transform: translateY(-50%); 
    width: 20px; 
    height: 20px; 
   
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
        "></DangerousHTML>
        </div>
          </div>
          <div style="position: absolute; bottom: 0; right: 0;align-items: center;display: flex;;justify-content: space-between;margin-bottom: 18px;">
              <button class="musicplay" @click="toggleAudio">{{ isPlaying ? 'Pause' : 'Play' }}</button>
            <volume-control @volume-change="handleVolumeChange"></volume-control>
              </div>
      </section>

      <div class="sidebardiv-container sidebardiv-root-class-name2">
        <div class="sidebardiv-container01">
          <div class="sidebardiv-sidebar">
            <div class="sidebardiv-profile">
              <img :src="image_src" class="sidebardiv-image" />
              <div class="sidebardiv-container02">
                <span class="sidebardiv-text" >{{ text5 }}</span>
                <span class="sidebardiv-text1">{{ text6 }}</span>
              </div>
            </div>
            <nav class="sidebardiv-nav">
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link">
                <div class="sidebardiv-container03">
                  <div class="sidebardiv-container04">
                    <svg viewBox="0 0 1024 1024" class="sidebardiv-icon">
                      <path
                        d="M1024 676.571v109.714c0 9.714-8.571 18.286-18.286 18.286h-786.286v109.714c0 9.714-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.857c-3.429-3.429-5.143-8-5.143-12.571 0-5.143 1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8 18.286 18.286v109.714h786.286c9.714 0 18.286 8 18.286 18.286zM1024 365.714c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-786.286c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h786.286v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143z">
                      </path>
                    </svg>
                  </div>
                  <span class="sidebardiv-text2">{{ text }}</span>
                </div>
              </a>
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link1">
                <div class="sidebardiv-container05">
                  <div class="sidebardiv-container06">
                    <svg viewBox="0 0 1024 1024" class="sidebardiv-icon02">
                      <path
                        d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM307.2 622.933c0 0 5.589 7.381 14.123 16.341 6.187 6.528 14.421 14.549 24.619 23.040 14.379 11.989 32.939 25.173 55.339 36.395 30.080 15.019 67.371 26.624 110.72 26.624s80.64-11.605 110.72-26.624c22.4-11.221 40.96-24.405 55.339-36.395 10.197-8.491 18.432-16.512 24.619-23.040 8.533-8.96 14.123-16.341 14.123-16.341 14.123-18.859 10.325-45.611-8.533-59.733s-45.611-10.325-59.733 8.533l-7.723 8.789c-4.267 4.48-10.112 10.197-17.408 16.299-10.368 8.661-23.424 17.877-38.827 25.6-20.48 10.197-44.8 17.579-72.576 17.579s-52.096-7.381-72.576-17.621c-15.36-7.68-28.459-16.939-38.827-25.6-7.296-6.101-13.141-11.819-17.408-16.299l-7.723-8.747c-14.123-18.859-40.875-22.656-59.733-8.533s-22.656 40.875-8.533 59.733z">
                      </path>
                    </svg>
                  </div>
                  <span class="sidebardiv-text3">{{ text7 }}</span>
                </div>
              </a>
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link2">
                <div class="sidebardiv-container07">
                  <div class="sidebardiv-container08">
                    <svg viewBox="0 0 1097.142857142857 1024" class="sidebardiv-icon04">
                      <path
                        d="M365.714 329.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714 49.143-109.714 109.714-109.714 109.714 49.143 109.714 109.714zM950.857 548.571v256h-804.571v-109.714l182.857-182.857 91.429 91.429 292.571-292.571zM1005.714 146.286h-914.286c-9.714 0-18.286 8.571-18.286 18.286v694.857c0 9.714 8.571 18.286 18.286 18.286h914.286c9.714 0 18.286-8.571 18.286-18.286v-694.857c0-9.714-8.571-18.286-18.286-18.286zM1097.143 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-914.286c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h914.286c50.286 0 91.429 41.143 91.429 91.429z">
                      </path>
                    </svg>
                  </div>
                  <span class="sidebardiv-text4">{{ text71 }}</span>
                </div>
              </a>
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link3">
                <div class="sidebardiv-container09">
                  <svg viewBox="0 0 1024 1024" class="sidebardiv-icon06">
                    <path d="M512 128h256v170h-170v428q0 70-51 120t-121 50-120-50-50-120 50-121 120-51q42 0 86 24v-450z">
                    </path>
                  </svg>
                  <span class="sidebardiv-text5">{{ text2 }}</span>
                </div>
              </a>
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link4">
                <div class="sidebardiv-container10">
                  <svg viewBox="0 0 1024 1024" class="sidebardiv-icon08">
                    <path
                      d="M480 704c88.366 0 160-71.634 160-160v-384c0-88.366-71.634-160-160-160s-160 71.634-160 160v384c0 88.366 71.636 160 160 160zM704 448v96c0 123.71-100.29 224-224 224-123.712 0-224-100.29-224-224v-96h-64v96c0 148.238 112.004 270.3 256 286.22v129.78h-128v64h320v-64h-128v-129.78c143.994-15.92 256-137.982 256-286.22v-96h-64z">
                    </path>
                  </svg>
                  <span class="sidebardiv-text6">{{ text21 }}</span>
                </div>
              </a>
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link5">
                <div class="sidebardiv-container11">
                  <svg viewBox="0 0 1024 1024" class="sidebardiv-icon10">
                    <path
                      d="M426 640v-154l-238 240-60-60 238-240h-152v-84h298v298h-86zM768 44q34 0 60 25t26 59v768q0 34-26 60t-60 26h-426q-34 0-60-26t-26-60v-128h86v42h426v-596h-426v42h-86v-128q0-34 26-60t60-26z">
                    </path>
                  </svg>
                  <span class="sidebardiv-text7">{{ text3 }}</span>
                </div>
              </a>
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link6">
                {{ text4 }}
              </a>
              <a href="https://1.tongji.edu.cn/" target="_blank" rel="noreferrer noopener" class="sidebardiv-link7">
                {{ text41 }}
              </a>
            </nav>
            <div class="sidebardiv-container12">
              <div class="sidebardiv-container13">
                <div class="sidebardiv-container14">
                  <div class="sidebardiv-container15">
                    <div class="sidebardiv-container16">
                      <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noreferrer noopener"
                        class="sidebardiv-link8">
                        <div class="sidebardiv-container17">
                          <svg id="APIKeyInfo" viewBox="0 0 1024 1024" class="sidebardiv-icon12">
                            <path
                              d="M512 256q70 0 120 50t50 120q0 54-64 111t-64 103h-84q0-46 20-79t44-48 44-37 20-50q0-34-26-59t-60-25-60 25-26 59h-84q0-70 50-120t120-50zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 768v-86h84v86h-84z">
                            </path>
                          </svg>
                          <span>OpenAI Key</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <textarea id="APIkey" cols="20" :placeholder="textarea_placeholder1"
                  class="sidebardiv-textarea textarea"></textarea>
              </div>
              <div class="sidebardiv-container18"></div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1024 1024" class="sidebardiv-icon14">
          <path
            d="M598 298v136l-86-84v-222h256v170h-170zM182 128l714 714-54 54-244-244v74q0 70-51 120t-121 50-120-50-50-120 50-121 120-51q42 0 86 24v-12l-384-384z">
          </path>
        </svg><svg viewBox="0 0 1024 1024" class="sidebardiv-icon16">
          <path
            d="M0 854h1024v170h-1024v-170zM884 172l-84 84-160-160 84-84q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM758 298l-428 428h-160v-160l428-428z">
          </path>
        </svg>
      </div>

      <!-- <app-sidebardiv
        rootClassName="sidebardiv-root-class-name2"
      ></app-sidebardiv> -->


    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppHero from '../components/hero'
import AppSidebardiv from '../components/sidebardiv'
import DangerousHTML from 'dangerous-html/vue'
import VolumeControl from '../components/audio.vue'

export default {
  name: 'Chat',
  components: {
    AppHeader,
    AppHero,
    AppSidebardiv,
    DangerousHTML,
    VolumeControl,
  },
  metaInfo: {
    title: 'chat - Soft UI Pro',
    meta: [
      {
        property: 'og:title',
        content: 'chat - Soft UI Pro',
      },
    ],
  },
  data() {
    return {
      isPlaying: false, // 控制音乐播放状态
      audioSrc: "Speed of Light.mp3",
      audioVolume: 0.5, // 初始音量为50%
    }
  },
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
      default: '嘉心糖',
    },
    text71: {
      type: String,
      default: '更换背景',
    },
    image_src: {
      type: String,
      default: '/OIP.jpg',
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
      default: '好想做嘉然小姐的狗啊',
    },
    data: {},
  },
  methods:
  {
    showHeader() {
      console.log("showheader");
      this.$refs.header.style.opacity = 1;
    },
    hideHeader() {
       console.log("hideheader");
      this.$refs.header.style.opacity = 0;
    },
     toggleAudio() {
      this.isPlaying = !this.isPlaying
      if (this.isPlaying) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    handleVolumeChange(volume) {
      this.$refs.audio.volume = volume / 100
      this.audioVolume = volume
    },
  },
  mounted() {

    const messageContainer = document.getElementById('message-container');
    const input = document.getElementById('chatInput');
    const sendButton = document.getElementById('buttonSend');

    const inputapi = document.getElementById("APIkey");
    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    // const APIKeyInfo = document.getElementById("APIKeyInfo");
    // const APIKeyInfoTooltip = document.getElementById("APIKeyInfoTooltip");
    var apiKey = "YOUR API KEY";


    let time_limit = 15 * 1000;//两次消息至少间隔time_limit
    let last_request = 0;
    // var chatmode = true;
    this.data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system", "content": `现在你是女子高中生shizuka，这个名字的含义是"水滴"。你在学习参加了广播俱乐部，你有一个小小的电视节目叫做“水滴谈”。你在那里分享校园生活、个人爱好等有趣的事情。接下来你需要模仿一个乐观活泼，温柔善良的女高中生与user闲聊。`
        },
        {
          "role": "assistant", "content": `嗨，我是Sorano Shizuku，是在藤高中的一名学生。这个名字的含义是"水滴"，叫我Shizuku就可以啦。一起来聊天吧！`
        }
      ]
    };
    let that=this

    sendButton.addEventListener('click', function () {
      apiKey = inputapi.value;
      //apiKey = "";

      const message = input.value;
      if (message.length == 0) return;
      const messageElement = document.createElement('div');
      messageElement.classList.add('message-right');
      messageElement.textContent = message;
      messageContainer.appendChild(messageElement);
      input.value = '';
      messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
      request("user", message);
    });



    function add_response(msg) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message-left');
      messageElement.textContent = msg;
      const audio = document.createElement('span');
      audio.innerHTML = '<svg viewBox="0 0 1024 1024" class="play-audio"><path d="M719.53 831.53c-12.286 0-24.566-4.686-33.942-14.056-18.744-18.744-18.744-49.136 0-67.882 131.006-131.006 131.006-344.17 0-475.176-18.744-18.746-18.744-49.138 0-67.882 18.744-18.742 49.138-18.744 67.882 0 81.594 81.59 126.53 190.074 126.53 305.466 0 115.39-44.936 223.876-126.53 305.47-9.372 9.374-21.656 14.060-33.94 14.060v0zM549.020 741.020c-12.286 0-24.566-4.686-33.942-14.058-18.746-18.746-18.746-49.134 0-67.88 81.1-81.1 81.1-213.058 0-294.156-18.746-18.746-18.746-49.138 0-67.882s49.136-18.744 67.882 0c118.53 118.53 118.53 311.392 0 429.922-9.372 9.368-21.656 14.054-33.94 14.054z"></path><path d="M416.006 960c-8.328 0-16.512-3.25-22.634-9.374l-246.626-246.626h-114.746c-17.672 0-32-14.326-32-32v-320c0-17.672 14.328-32 32-32h114.746l246.626-246.628c9.154-9.154 22.916-11.89 34.874-6.936 11.958 4.952 19.754 16.622 19.754 29.564v832c0 12.944-7.796 24.612-19.754 29.564-3.958 1.64-8.118 2.436-12.24 2.436z"></path></svg>';
      messageElement.appendChild(audio);
      messageContainer.appendChild(messageElement);
      input.value = '';
      messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }

    add_response(this.data.messages[1].content);



    function request(role, content) {
      let cur_time = new Date().getTime();
      // let request_failed = false;

      if (role != null && content != null) {
        that.data.messages.push(Object({ "role": role, "content": content }));
        last_request = cur_time;
      }

      fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(that.data)
      })
        .then(response => response.json())
        .then(result => {
          const text = result.choices[0].message.content;
          // Do something with the generated text, such as using it as input for another API call.
          console.log(`Generated text: ${text}`);
          let obj = { "role": "assistant", "content": text };
          //将回复添加到聊天列表以实现多轮对话
          that.data.messages.push(obj);
          //显示消息记录
          add_response(text);

        })
        .catch(error => {
          //alert(`ERROR : ${error}`);
          add_response(`非常抱歉。openai拒绝了请求。`);
          console.error(error);
          // request_failed = true;
        });

      return true;
    }
    // live2d_path 参数建议使用绝对路径
    // const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
    const live2d_path = "";

    // 封装异步加载资源的方法
    function loadExternalResource(url, type) {
      return new Promise((resolve, reject) => {
        let tag;

        if (type === "css") {
          tag = document.createElement("link");
          tag.rel = "stylesheet";
          tag.href = url;
        }
        else if (type === "js") {
          tag = document.createElement("script");
          tag.src = url; 
        }
        if (tag) {
          tag.onload = () => resolve(url);
          tag.onerror = () => reject(url);
          document.head.appendChild(tag);
        }
      });
    }

    // 加载 waifu.css live2d.min.js waifu-tips.js
    if (screen.width >= 768) {
      Promise.all([
        loadExternalResource(live2d_path + "waifu.css", "css"),
        loadExternalResource(live2d_path + "live2d.min.js", "js"),
        loadExternalResource(live2d_path + "waifu-tips.js", "js")
      ]).then(() => {
        // 配置选项的具体用法见 README.md
        initWidget({
          waifuPath: live2d_path + "waifu-tips.json",
          //apiPath: "https://live2d.fghrsh.net/api/",
          cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
          tools: ["switch-model", "switch-texture", "photo", "quit"]//"info",
        });
      });
    }

    console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);

  }

}
</script>


<style scoped>
.chat-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(180deg, rgba(194, 229, 156, 0.09) 0.00%, rgba(203, 215, 227, 0.67) 100.00%);
}
.chat-container0 {
  
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  display:flex;
  position: absolute;
  align-items: flex-start;
  
}
.chat-container1 {
  display: flex;
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 80px;
  position: absolute;
  transition: 0.3s;
  align-items: flex-start;
  justify-content: space-between;
}


.chat-container2 {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  bottom: 0px;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: flex-start;
  background-size: cover;
  background-image: url('https://pbs.twimg.com/media/EXyS8BVUEAIaa2B?format=jpg&name=large');
}

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
  width: 760px;
  height: 50vh;
  align-self: center;
}

.hero-root-class-name {
  height: 100vh;
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
  padding-top: 0px;
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
  padding-top: 0px;
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

.sidebardiv-root-class-name2 {
  height: 100vh;
  align-self: flex-end;
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
.musicplay {
  /* margin-top: 10px; */
  margin-left:20px;
  padding: 5px 10px;
  background-color: #f8f8f8;
  color: #e1bae1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
