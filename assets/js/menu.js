const hamburguesa = document.querySelector(".hamburguesa");
const navbar = document.querySelector(".navbar");

hamburguesa.addEventListener("click", () => {
    navbar.classList.toggle("active");
});