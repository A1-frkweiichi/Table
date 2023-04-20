import { Controller } from "stimulus";

document.addEventListener("DOMContentLoaded", function () {
  const taskRows = document.querySelectorAll(".task-row");

  taskRows.forEach((row) => {
    row.addEventListener("click", function () {
      this.classList.toggle("text-decoration-line-through");
    });
  });
});

import { Controller } from "stimulus";

export default class extends Controller {
  toggleStrikethrough(event) {
    const taskText = event.currentTarget.querySelector(".task-text");
    taskText.classList.toggle("strikethrough");
  }
}
