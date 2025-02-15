document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".bucket-list li");

    items.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("completed");
            const icon = this.querySelector("i");
            icon.classList.toggle("fas");
            icon.classList.toggle("far");
            icon.classList.toggle("fa-check-circle");
            icon.classList.toggle("fa-circle");
        });
    });
});
