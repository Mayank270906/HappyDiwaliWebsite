document.addEventListener("DOMContentLoaded", () => {
    // Display a greeting message
    alert("Happy Diwali! Enjoy the Festival of Lights!");

    // Ensure music starts automatically
    const audio = document.getElementById("fireworksSound");
    audio.play();

    // Handle any issues with autoplay on some browsers
    audio.onplay = () => console.log("Music is playing.");
    audio.onpause = () => console.log("Music is paused.");
});
