document.addEventListener("DOMContentLoaded", () => {
  const ticketForm = document.getElementById("ticketForm");

  // Handle form submission
  ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the selected destination
    const destination = document.querySelector('input[name="destination"]:checked').value;

    // Store the destination in localStorage
    localStorage.setItem("destination", destination);

    // Redirect to now-ticket.html
    window.location.href = "now-ticket.html";
  });

  // Live clock
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Use 12-hour format with AM/PM
    });
  }
  setInterval(updateClock, 1000);
  updateClock();

  const planningNotesLink = document.getElementById("planningNotesLink");
  const planningNotesImage = document.getElementById("planningNotesImage");

  if (planningNotesLink && planningNotesImage) {
    planningNotesLink.addEventListener("click", () => {
      // Toggle the visibility of the image
      if (planningNotesImage.style.display === "none" || planningNotesImage.style.display === "") {
        planningNotesImage.style.display = "block"; // Show the image
      } else {
        planningNotesImage.style.display = "none"; // Hide the image
      }
    });
  }

  const planningNotesModal = document.getElementById("planningNotesModal");
  const closeButton = document.querySelector(".close-button");

  if (planningNotesLink && planningNotesModal && closeButton) {
    // Show the modal when the link is clicked
    planningNotesLink.addEventListener("click", () => {
      planningNotesModal.style.display = "flex"; // Show the modal
    });

    // Hide the modal when the close button is clicked
    closeButton.addEventListener("click", () => {
      planningNotesModal.style.display = "none"; // Hide the modal
    });

    // Hide the modal when clicking outside the modal content
    planningNotesModal.addEventListener("click", (e) => {
      if (e.target === planningNotesModal) {
        planningNotesModal.style.display = "none"; // Hide the modal
      }
    });
  }
});