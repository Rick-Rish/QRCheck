document.addEventListener("DOMContentLoaded", () => {
  // Flight card & popup elements
  const bookBtn = document.getElementById("bookBtn");
  const popup = document.getElementById("popup");
  const confirmBtn = document.getElementById("confirmBtn");
  const seatCounter = document.getElementById("seatCounter");
  const popupSeatCounter = document.getElementById("popupSeatCounter");
  const flightCard = document.querySelector(".flight-card");
  const noFlightsMessage = document.getElementById("noFlightsMessage");

  let bookedSeats = 0;
  const totalSeats = 172;

  // Show popup when Book Here is clicked
  bookBtn.addEventListener("click", () => {
    popup.classList.add("active");
    popupSeatCounter.textContent = `Seats Booked: ${bookedSeats} / ${totalSeats}`;
  });

  // Confirm booking
  confirmBtn.addEventListener("click", () => {
    bookedSeats++;
    seatCounter.textContent = `Seats Booked: ${bookedSeats} / ${totalSeats}`;
    popupSeatCounter.textContent = `Seats Booked: ${bookedSeats} / ${totalSeats}`;
    popup.classList.remove("active");
    if (bookedSeats > totalSeats) bookedSeats = totalSeats;
  });

  // === Hide flight card if not available ===
  const flightAvailable = flightCard.getAttribute("data-available") === "true";

  if (flightAvailable) {
    flightCard.style.display = "block";
    noFlightsMessage.style.display = "none";
  } else {
    flightCard.style.display = "none";
    noFlightsMessage.style.display = "block";
  }
});

// Fade in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("fade-in");
});

// Fade out on link click
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const url = this.href;

    document.documentElement.classList.remove("fade-in");
    document.documentElement.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = url;
    }, 500); // match CSS transition
  });
});
