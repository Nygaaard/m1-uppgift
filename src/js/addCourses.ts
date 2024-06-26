const courseCodeEl = document.getElementById("courseCode") as HTMLInputElement;
const courseNameEl = document.getElementById("courseName") as HTMLInputElement;
const progEl = document.getElementById("prog") as HTMLInputElement;
const syllabusEl = document.getElementById("syllabus") as HTMLInputElement;
const addEl = document.getElementById("add") as HTMLButtonElement;

export interface CourseInfo {
  courseCode: string;
  courseName: string;
  prog: string;
  syllabus: string;
}

export function addCourse(): void {
  addEl.addEventListener("click", function (event) {
    event?.preventDefault();

    const course: CourseInfo = {
      courseCode: courseCodeEl.value,
      courseName: courseNameEl.value,
      prog: progEl.value,
      syllabus: syllabusEl.value,
    };
    saveCourse(course);
  });
}

function saveCourse(course: CourseInfo): void {
  const validProgValues = ["A", "B"];

  if (!validProgValues.includes(course.prog)) {
    alert("Progression måste vara antingen 'A' eller 'B'");
    return;
  }

  const existingCourses = JSON.parse(
    window.localStorage.getItem("courses") || "[]"
  ) as CourseInfo[];

  const isUnique = existingCourses.every(
    (existingCourse) => existingCourse.courseCode !== course.courseCode
  );

  if (isUnique) {
    existingCourses.push(course);
    window.localStorage.setItem("courses", JSON.stringify(existingCourses));
    location.reload();
  } else {
    alert("Kurskoden finns redan. Ange en unik kurskod.");
  }
}
