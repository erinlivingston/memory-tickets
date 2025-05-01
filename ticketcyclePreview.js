//script for thumbnail that will cycle through all tickets quickly, for main page
import { allTicketPaths } from '../imageData.js';

const ticketCycle = document.getElementById("archive-preview");
let index = 0;

//function cyclePreview to move through all tickets in the archive
function cyclePreview() {
    ticketCycle.src = allTicketPaths[index];
    index = (index + 1) % allTicketPaths.length;
 }

 cyclePreview();
 setInterval(cyclePreview, 200); //adjust speed of cycling here
    
