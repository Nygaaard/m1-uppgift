export function updateCourse() {
  document.querySelectorAll(".update-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const row = this.parentNode.parentNode;
      row.querySelectorAll("td:not(:last-child)").forEach((cell) => {
        cell.contentEditable = true;
      });
    });
  });
}
