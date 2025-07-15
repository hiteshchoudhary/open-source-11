// Reference DOM elements
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');

// Listen for Enter key
userInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const input = userInput.value.trim();
    if (input !== '') {
      addMessage(input, 'user');
      respond(input);
      userInput.value = '';
    }
  }
});

// Append message to chat
function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `msg ${sender}`;
  msg.textContent = text;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Very simple rule-based responses
function respond(input) {
  let response = '';

  const lower = input.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi')) {
    response = 'Hello! How can I help you today?';
  } else if (lower.includes('your name')) {
    response = 'I’m just a simple JavaScript chatbot. 😊';
  } else if (lower.includes('help')) {
    response = 'Sure! Ask me anything about this demo.';
  } else {
    response = "Sorry, I don't understand. 🤖";
  }

  setTimeout(() => addMessage(response, 'bot'), 500);
}
