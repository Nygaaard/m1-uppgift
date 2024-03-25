import { printCourses } from "./printCourses";

const addEl = document.getElementById("add") as HTMLButtonElement;

export function addCourses(): void {
  addEl.addEventListener("click", function () {
    event?.preventDefault();
    printCourses();
  });
}
