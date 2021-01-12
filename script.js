const finalDate = new Date("January 10, 2021 16:15:00").getTime();

const timer = () => {
  const now = new Date().getTime();

  let diff = finalDate - now;
  if (diff < 0) {
    document.querySelector(".alert").style.display = "block";
    document.querySelector(".container").style.display = "none";
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Adding zeros
  days === 0 ? (days = days) : days;
  days <= 99 && days > 0 ? (days = `0${days}`) : days;
  days <= 9 ? (days = `00${days}`) : days;
  hours <= 9 ? (hours = `0${hours}`) : hours;
  minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
  seconds <= 9 ? (seconds = `0${seconds}`) : seconds;

  document.querySelector("#days").textContent = days;
  document.querySelector("#hr").textContent = hours;
  document.querySelector("#min").textContent = minutes;
  document.querySelector("#sec").textContent = seconds;
};

timer();
setInterval(timer, 1000);
