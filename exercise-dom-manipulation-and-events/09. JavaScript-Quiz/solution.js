function solve() {
  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  const questionsSections = Array.from(
    document.querySelectorAll("#quizzie > section"),
  );
  const possibleAnswersBtns = document.querySelectorAll(".quiz-answer");
  const resultContainer = document.querySelector("#results h1");
  let correctAnswersCount = 0;

  for (const button of possibleAnswersBtns) {
    button.addEventListener("click", handleClickedAnswer);
  }

  function handleClickedAnswer(e) {
    const clickedAnswerText =
      e.currentTarget.querySelector(".answer-text").textContent;
    if (correctAnswers.includes(clickedAnswerText)) {
      correctAnswersCount++;
    }
    showNextQuestion();
  }

  function showNextQuestion() {
    const previousQuestion = questionsSections.shift();
    previousQuestion.style.display = "none";
    const newQuestion = questionsSections[0];

    if (!newQuestion) {
      resultContainer.parentElement.parentElement.style.display = "block";
      if (correctAnswersCount === 3) {
        resultContainer.textContent =
          "You are recognized as top JavaScript fan!";
      } else {
        resultContainer.textContent = `You have ${correctAnswersCount} right answers`;
      }
    } else {
      newQuestion.style.display = "block";
    }
  }
}
