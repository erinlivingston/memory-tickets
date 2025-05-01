//script for thumbnail that will cycle through all tickets quickly, for main page
import { allTicketPaths as originalPaths } from '../imageData.js';

document.addEventListener("DOMContentLoaded", () => {
    const ticketCycle = document.getElementById("archive-preview");
    if (!ticketCycle) {
        console.error("Could not find #archive-preview");
        return;
    }

    // Adjust paths to work from /archive/ folder!
    const allTicketPaths = originalPaths.map(path => `../${path}`);

    let index = 0;

    function cyclePreview() {
        ticketCycle.src = allTicketPaths[index];
        index = (index + 1) % allTicketPaths.length;
    }

    cyclePreview();
    setInterval(cyclePreview, 200);
});