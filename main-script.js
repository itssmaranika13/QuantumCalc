//all the query selectors first

const calculateButton = document.querySelector(".calculate-button");
const premiumCard = document.querySelector(".modal-overlay-premium");
const backButton = document.querySelector(".back-button")
const processCard = document.querySelector(".modal-overlay-process");
const payButton = document.querySelector(".upgrade-button")
const finalCard = document.querySelector(".modal-overlay-final")
const finalBack = document.querySelector(".final-back-button")
const answer = document.querySelector(".answer")


//here are the fake answers

const answers = [
    "Ask ChatGPT, he's smart.",
    "7 I guess?",
    "Maybe √π. No no, 5, definitely.",
    "Maybe g = 9.8m/s?",
    "I think your question is wrong :)",
    "Mitochondria is the power house of the cell.",
    "The answer is always 0 or 1.",
    "True",
    "False",
    "Its Shakespere right?",
    "idk man"
]

//disabling calculate now button

calculateButton.addEventListener("click", () => {
    premiumCard.style.display = "flex";
});

backButton.addEventListener("click", () => {
    premiumCard.style.display = "none";
});

finalBack.addEventListener("click", () => {
    finalCard.style.display = "none";
});

payButton.addEventListener("click", () => {

    premiumCard.style.display = "none";
    processCard.style.display = "flex";

    setTimeout(() => {
        processCard.style.display = "none";
        finalCard.style.display = "flex";

        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        answer.innerHTML = randomAnswer;
    }, 10000);

});

