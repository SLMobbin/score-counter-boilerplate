// Fetch and display scores
async function loadScores() {
  try {
    const res = await fetch("/api/scores");
    const scores = await res.json();

    const list = document.getElementById("scores-list");
    list.innerHTML = "";

    scores.forEach(score => {
      const li = document.createElement("li");
      li.textContent = `${score.player}: ${score.points}`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading scores:", err);
  }
}

// Handle form submission
document.getElementById("score-form").addEventListener("submit", async e => {
  e.preventDefault();

  const player = document.getElementById("player").value;
  const points = document.getElementById("points").value;

  try {
    await fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ player, points }),
    });

    // Reload scores after adding
    loadScores();
    e.target.reset();
  } catch (err) {
    console.error("Error adding score:", err);
  }
});

// Initial load
loadScores();
