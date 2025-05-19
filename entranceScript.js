// Live clock
function updateClock() {
    const now = new Date();
    document.querySelectorAll("#clock").forEach(clock => {
        clock.textContent = now.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          });
        });
}
setInterval(updateClock, 1000);
updateClock();


document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById("enterButton");
    const arrowButton = document.getElementById("arrowButton");
    const introContainer = document.getElementById("introContainer");
    const timeIntro = document.getElementById("timeIntro");
    const ticketSelection = document.getElementById("ticketSelection");
    const leftDoor = document.querySelector(".left-door");
    const rightDoor = document.querySelector(".right-door");
  
    // Enter button click event
    enterButton.addEventListener("click", () => {
      // Slide doors open
      leftDoor.classList.add("slide-left");
      rightDoor.classList.add("slide-right");
  
      // Fade out introContainer and fade in timeIntro
      introContainer.classList.add("hidden");
      setTimeout(() => {
        timeIntro.classList.remove("hidden");
        timeIntro.classList.add("fade-in");
      }, 1700); // Match door animation duration
    });
  
    // Arrow button click event
    arrowButton.addEventListener("click", () => {
      // Fade out timeIntro and fade in ticketSelection
      timeIntro.classList.add("hidden");
      ticketSelection.classList.remove("hidden");
      ticketSelection.classList.add("fade-in");
    });
  
  });








// Submit handler
    document.getElementById("ticketForm").addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "now-ticket.html";
      });




/*version 5.17.25 at 5:40 pm
script for entrance page to move from doors, time info, select ticket, activate

document.getElementById("enterButton").addEventListener("click", function () {
    const enterBtn = document.getElementById("enterButton");
    const leftDoor = document.querySelector(".left-door");
    const rightDoor = document.querySelector(".right-door");
    const selectionPanel = document.getElementById("ticketSelection");
    const introText = document.getElementById("entranceIntrotext");

      leftDoor.classList.add("slide-left");
      rightDoor.classList.add("slide-right");

      //Fade out the intro text and the enter button
      introText.classList.add("hidden");
      enterBtn.classList.add("hidden");

      // Show form after door animation
      setTimeout(() => {
        selectionPanel.classList.remove("hidden");
        selectionPanel.classList.add("fade-in");
        leftDoor.style.display = "none";
        rightDoor.style.display = "none";
      }, 1700);
    }); 

    // Live clock
    function updateClock() {
      const now = new Date();
      document.getElementById("clock").textContent = now.toLocaleString("en-US", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false
      });
    }
    setInterval(updateClock, 1000);
    updateClock(); */


