// Set launch date here
const launchDate = new Date("2025-12-01T00:00:00").getTime();

// Update countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    document.querySelector(".timer").innerHTML = "Launched!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".timer").innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);