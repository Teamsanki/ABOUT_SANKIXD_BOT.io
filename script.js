// Automatically redirect after progress bar completes
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress-bar");

    // Start the progress bar animation
    progressBar.style.animation = "progress-animation 10s linear forwards";

    // Redirect after 10 seconds
    setTimeout(() => {
        window.location.href = "https://your-next-page-url.com"; // Replace with your destination URL
    }, 15000);
});
