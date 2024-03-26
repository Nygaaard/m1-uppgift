import { addCourse } from "./addCourses";
import { getCourses } from "./getCourses";

const updateEl = document.getElementById("update") as HTMLButtonElement;

addCourse();
getCourses();

updateEl.addEventListener("click", function () {
  const tdElements = document.querySelectorAll(
    ".editable"
  ) as NodeListOf<HTMLTableCellElement>;
  tdElements.forEach((td) => {
    td.contentEditable = "true";
  });
});
