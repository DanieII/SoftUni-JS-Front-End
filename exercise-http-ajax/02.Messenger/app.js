const sendBtn = document.querySelector("#submit");
const refreshBtn = document.querySelector("#refresh");
const authorElement = document.querySelector("input[name='author']");
const messageElement = document.querySelector("input[name='content']");
const messagesArea = document.querySelector("#messages");

function attachEvents() {
  sendBtn.addEventListener("click", handleSendBtnClick);
  refreshBtn.addEventListener("click", handleRefreshBtnClick);
}

function handleSendBtnClick() {
  fetch("http://localhost:3030/jsonstore/messenger", {
    method: "POST",
    body: JSON.stringify({
      author: authorElement.value,
      content: messageElement.value,
    }),
  }).then(() => {
    authorElement.value = "";
    messageElement.value = "";
  });
}

async function handleRefreshBtnClick() {
  const response = await fetch("http://localhost:3030/jsonstore/messenger");
  const result = await response.json();
  const messages = [];

  for (const message of Object.values(result)) {
    messages.push(`${message.author}: ${message.content}`);
  }

  messagesArea.value = messages.join("\n");
}

attachEvents();
