document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("quiz-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;

    if (form["question-1"].value === "Paris") {
      score++;
    }

    if (form["question-2"].value === "Mount Everest") {
      score++;
    }

    alert("You scored " + score + " out of 2");
  });
});
