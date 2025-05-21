document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.getElementById("enterButton");
  const arrowButton = document.getElementById("arrowButton");
  const introContainer = document.getElementById("introContainer");
  const timeIntro = document.getElementById("timeIntro");
  const leftDoor = document.querySelector(".left-door");
  const rightDoor = document.querySelector(".right-door");

  // Enter button click event
  if (enterButton) {
    enterButton.addEventListener("click", () => {
      leftDoor.classList.add("slide-left");
      rightDoor.classList.add("slide-right");

      introContainer.classList.add("hidden");
      setTimeout(() => {
        timeIntro.classList.remove("hidden");
        timeIntro.classList.add("fade-in");
      }, 1700);
    });
  }

  // Arrow button click event
  if (arrowButton) {
    arrowButton.addEventListener("click", () => {
      window.location.href = "selection.html";
    });
  }

  // Live clock
  function updateClock() {
    const now = new Date();

    document.querySelectorAll("#clock").forEach((clock) => {
      clock.textContent = now.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
    });

    const clockTimepage = document.getElementById("clockTimepage");
    if (clockTimepage) {
      clockTimepage.textContent = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      clockTimepage.classList.remove("pulse-sync");
      void clockTimepage.offsetWidth;
      clockTimepage.classList.add("pulse-sync");
    }
  }

  setInterval(updateClock, 1000);
  updateClock();

  // Ticket form submission
  const ticketForm = document.getElementById("ticketForm");
  if (ticketForm) {
    ticketForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "now-ticket.html";
    });
  }
});


