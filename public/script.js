
const socket = io();
const sendButton = document.getElementById('send-button');
const inputField = document.getElementById('input');
const chatContainer = document.getElementById('chat-container');

sendButton.addEventListener('click', sendMessage);
inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const text = inputField.value.trim();
  if (text !== '') {
    socket.emit('chat message', text);
    inputField.value = '';
  }
}

socket.on('chat message', function(msg) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerText = msg;
  chatContainer.appendChild(bubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;
});
