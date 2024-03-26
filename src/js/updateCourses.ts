import { CourseInfo } from "./addCourses";

export function updateCourse(index: number): void {
  const courseCodeEl = document.getElementById(
    `courseCode-${index}`
  ) as HTMLTableCellElement;
  const courseNameEl = document.getElementById(
    `courseName-${index}`
  ) as HTMLElement;
  const courseProgEl = document.getElementById(`prog-${index}`) as HTMLElement;
  const syllabusLink = document.getElementById(
    `syllabus-${index}`
  ) as HTMLAnchorElement;

  const courses: CourseInfo[] = JSON.parse(
    window.localStorage.getItem("courses") || "[]"
  );

  const course: CourseInfo = {
    courseCode: courseCodeEl.textContent || "",
    courseName: courseNameEl.textContent || "",
    prog: courseProgEl.textContent || "",
    syllabus: syllabusLink.getAttribute("href") || "",
  };
  const newCourses = courses;
  newCourses[index] = course;
  window.localStorage.setItem("courses", JSON.stringify(newCourses));

  const tdElements = document.querySelectorAll(
    "td"
  ) as NodeListOf<HTMLTableCellElement>;
  tdElements.forEach((td) => {
    td.contentEditable = "false";
  });

  alert("Kursen uppdaterad!");
}
