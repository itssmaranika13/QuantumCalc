const first = document.querySelector(".button-1");
const second = document.querySelectorAll(".button-2");
const third = document.querySelector(".button-3");
const fourth = document.querySelector(".button-4");

const one = document.querySelector(".container-1");
const two = document.querySelector(".container-2");
const three = document.querySelector(".container-3");
const four = document.querySelector(".container-4");

first.addEventListener("click", () => {
    one.style.display = "none";
    two.style.display = "flex";
});

third.addEventListener("click", () => {
    two.style.display = "none";
    three.style.display = "flex";
});

fourth.addEventListener("click", () => {
    window.location.href = "main/main.html";
});

second.forEach(button => {
    button.addEventListener("click", () => {
        four.style.display = "flex";
    });
});