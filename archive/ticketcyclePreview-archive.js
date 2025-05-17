//script for thumbnail that will cycle through all tickets quickly, for main page
import { allTicketPaths as originalPaths } from '../imageData.js';

document.addEventListener("DOMContentLoaded", () => {
    const ticketCycle = document.getElementById("archive-preview");
    const playPauseIcon = document.getElementById("play-pause-icon");
    
    
    
    if (!ticketCycle || !playPauseIcon ) {
        console.error("Could not find #archive-preview or #play-pause-icon");
        return;
    }

    // line here adjusts paths to work from /archive/ folder!
    const allTicketPaths = originalPaths.map(path => `../${path}`);

    let index = 0;
    let intervalId = null;
    let isPaused = false;

    function cyclePreview() {
        ticketCycle.src = allTicketPaths[index];
        index = (index + 1) % allTicketPaths.length;
    }

    function startCycle() {
        intervalId = setInterval(cyclePreview, 200);
        playPauseIcon.textContent = "⏸"; // pause icon
    }

    function stopCycle() {
        clearInterval(intervalId);
        intervalId = null;
        playPauseIcon.textContent = "▶︎"; // play icon
    }

    // Start cycling on load
    cyclePreview();
    startCycle();
    
    // Toggle cycling on click
    ticketCycle.addEventListener("click", () => {
        if (isPaused) {
            startCycle();
        } else {
            stopCycle();
        }
        isPaused = !isPaused;
    });
    // Allow clicking the icon itself too
    playPauseIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // prevents double toggle
        ticketCycle.click();
    });



});