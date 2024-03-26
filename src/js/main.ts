import { addCourse } from "./addCourses";
import { getCourses } from "./getCourses";

const updateEl = document.getElementById("update") as HTMLButtonElement;
const saveEl = document.getElementById("save") as HTMLButtonElement;

addCourse();
getCourses();

updateEl.addEventListener("click", function () {
  const tdElements = document.querySelectorAll(
    "td"
  ) as NodeListOf<HTMLTableCellElement>;
  tdElements.forEach((td) => {
    td.contentEditable = "true";
  });
});
