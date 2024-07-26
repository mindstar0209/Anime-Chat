const chatbox = document.getElementById('chatbox');
// const closeButton = document.getElementById('Xclose');
const messageContainer = document.getElementById('message-container');
const input = document.getElementById('chatInput');
const sendButton = document.getElementById('buttonSend');
// const inOutButton = document.getElementById('InOutButton');
const sideBar = document.getElementById('sidebar_div');
const inputapi = document.getElementById("APIkey");
const apiEndpoint = "https://api.openai.com/v1/chat/completions";
// const APIKeyInfo = document.getElementById("APIKeyInfo");
// const APIKeyInfoTooltip = document.getElementById("APIKeyInfoTooltip");
var apiKey = "YOUR API KEY";


let time_limit = 15 * 1000;//两次消息至少间隔time_limit
let last_request = 0;
// var chatmode = true;
let data = {
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


function getapi() {
    apiKey = inputapi.value;
    console.log("api=" + apiKey);
}

// function addMessage() {
//     if (message.length == 0) return;
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message-right');
//     messageElement.textContent = message;
//     messageContainer.appendChild(messageElement);
//     input.value = '';
//     messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
//     //发送给chatgpt

//     request("user", message);

// }

function add_response(msg) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message-left');
    messageElement.textContent = msg;
    messageContainer.appendChild(messageElement);
    input.value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
}

add_response(data.messages[1].content);



function request(role, content) {
    let cur_time = new Date().getTime();
    // let request_failed = false;

    if (role != null && content != null) {
        data.messages.push(Object({ "role": role, "content": content }));
        last_request = cur_time;
    }

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            const text = result.choices[0].message.content;
            // Do something with the generated text, such as using it as input for another API call.
            console.log(`Generated text: ${text}`);
            let obj = { "role": "assistant", "content": text };
            //将回复添加到聊天列表以实现多轮对话
            data.messages.push(obj);
            //显示消息记录
            add_response(text);

        })
        .catch(error => {
            //alert(`ERROR : ${error}`);
            add_response(`非常抱歉。openai拒绝了请求。`);
            console.error(error);
            request_failed = true;
        });
    // }

    return true;
}
