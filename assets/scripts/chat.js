const chatBtn = document.getElementById('chat-float-btn');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-message-btn');

function toggleChat() {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
}

chatBtn.addEventListener('click', toggleChat);
closeChat.addEventListener('click', () => chatWindow.style.display = 'none');

// enviar mensaje
function addMessage(text, isUser) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    
    msgDiv.innerHTML = `

        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Demo respuesta del bot
function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('curso') || lowerMsg.includes('ofrece')) {
        return "DriveSmart ofrece cursos como: Conducción en Contexto Crítico, Normas y Concientización Legal, Fundamentos de Seguridad, y más.";
    }
    if (lowerMsg.includes('precio') || lowerMsg.includes('cuanto')) {
        return "Puedes consultar los precios en la sección de Contacto o Registrarte para ver planes disponibles.";
    }
    return "Disculpa, no cuento con esa información en este momento. Puedes contactarnos mediante el formulario en Contacto para más detalles.";
}

// Enviar pregunta de demostración
window.sendDemoQuestion = function() {
    addMessage("¿Qué cursos ofrece DriveSmart?", true);
    
    setTimeout(() => {
        addMessage(getBotResponse("cursos"), false);
    }, 600);
};

// enviar mensaje 
function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    addMessage(text, true);
    chatInput.value = '';
    
    setTimeout(() => {
        addMessage(getBotResponse(text), false);
    }, 500);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// cerrar chat al hacer click fuera de la ventana
document.addEventListener('click', (e) => {
    if (!chatWindow.contains(e.target) && !chatBtn.contains(e.target)) {
        chatWindow.style.display = 'none';
    }
});