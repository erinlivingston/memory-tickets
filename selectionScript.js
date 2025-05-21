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
});