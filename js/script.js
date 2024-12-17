// script.js
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#ageSelection .btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});




  