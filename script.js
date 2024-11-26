document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("message");

    // Typing message
    const message = "Welcome to Sᴀɴᴋɪ Xᴅ Mᴜsɪᴄ Bᴏᴛ! Redirecting you now...";
    let messageIndex = 0;

    // Typing effect logic
    const typingInterval = setInterval(() => {
        if (messageIndex < message.length) {
            messageElement.textContent += message[messageIndex];
            messageIndex++;
        } else {
            clearInterval(typingInterval); // Stop typing when message is complete
        }
    }, 100); // Adjust typing speed here

    // Redirect after the progress bar animation completes (10 seconds)
    setTimeout(() => {
        window.location.href = "https://your-next-page-url.com"; // Replace with your destination URL
    }, 10000); // Match this duration to the CSS animation
});
