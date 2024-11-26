document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
    const messageElement = document.getElementById("message");

    let countdown = 0; // Start countdown from 0
    let messageIndex = 0; // Track current character in message

    const message = "Welcome to SANKI XD Music Bot! Redirecting you now..."; // Typing message

    // Start the countdown
    const countdownInterval = setInterval(() => {
        timerElement.textContent = countdown;
        countdown++;

        if (countdown > 10) {
            clearInterval(countdownInterval); // Stop countdown after 10
        }
    }, 1000); // Update every second

    // Typing effect
    const typingInterval = setInterval(() => {
        if (messageIndex < message.length) {
            messageElement.textContent += message[messageIndex];
            messageIndex++;
        } else {
            clearInterval(typingInterval); // Stop typing when message is complete

            // Redirect after the message finishes typing
            setTimeout(() => {
                window.location.href = "https://your-next-page-url.com"; // Replace with your destination URL
            }, 1000); // Small delay before redirect
        }
    }, 100); // Typing speed (adjust as needed)
});
