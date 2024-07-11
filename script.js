document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');

    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.toggle('chatbot-closed');
        chatbotToggle.textContent = chatbotContainer.classList.contains('chatbot-closed') ? '▼' : '▲';
    });
});