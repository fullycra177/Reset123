function startReset(type) {
  document.getElementById("loadingBox").classList.remove("hidden");
  document.getElementById("successMessage").classList.add("hidden");

  let duration = 15 * 60; // 15 minutes
  let display = document.getElementById("timer");
  let text = document.getElementById("loadingText");

  text.textContent = type === "single" 
    ? "Resetting Vivo Y20..."
    : "Resetting All WhatsApp Chat Devices...";

  let timer = duration;
  let interval = setInterval(function () {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    display.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      document.getElementById("loadingBox").classList.add("hidden");
      document.getElementById("successMessage").classList.remove("hidden");
    }
  }, 1000);
}
