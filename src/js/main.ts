import { addCourse } from "./addCourses";
import { getCourses } from "./getCourses";

const updateEl = document.getElementById("update") as HTMLButtonElement;
const showInfoEl = document.querySelector(".show-info") as HTMLButtonElement;
const moreInfoEl = document.getElementById("more-info") as HTMLTextAreaElement;

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

showInfoEl.addEventListener("click", function () {
  const moreInfoValue = moreInfoEl.value;
  alert("Mer information: " + moreInfoValue);
});
