document.addEventListener("DOMContentLoaded", function () {
  const taskRows = document.querySelectorAll(".task-row");

  taskRows.forEach((row) => {
    row.addEventListener("click", function () {
      this.classList.toggle("text-decoration-line-through");
    });
  });
});
