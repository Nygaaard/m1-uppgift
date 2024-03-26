import { getCourses } from "./getCourses";

const courseCodeEl = document.getElementById("courseCode") as HTMLInputElement;
const courseNameEl = document.getElementById("courseName") as HTMLInputElement;
const progEl = document.getElementById("prog") as HTMLInputElement;
const syllabusEl = document.getElementById("syllabus") as HTMLInputElement;
const addEl = document.getElementById("add") as HTMLButtonElement;

export interface Course {
  courseCode: string;
  courseName: string;
  prog: string;
  syllabus: string;
}

export function addCourse(): void {
  addEl.addEventListener("click", function (event) {
    event?.preventDefault();

    const course: Course = {
      courseCode: courseCodeEl.value,
      courseName: courseNameEl.value,
      prog: progEl.value,
      syllabus: syllabusEl.value,
    };
    saveCourse(course);
  });
}

function saveCourse(course: Course): void {
  const existingCourses = JSON.parse(
    window.localStorage.getItem("courses") || "[]"
  );

  if (existingCourses) {
    const courses = existingCourses as Course[];
    courses.push(course);

    window.localStorage.setItem("courses", JSON.stringify(courses));
  } else {
    window.localStorage.setItem("courses", JSON.stringify(course));
  }
  location.reload();
}
