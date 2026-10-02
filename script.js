// Your JavaScript goes here.
const startBtn = document.getElementById("start-btn");

if (startBtn) {
  startBtn.addEventListener("click", function () {
    document.getElementById("workouts").scrollIntoView({ behavior: "smooth" });
  });
}

