import { CourseInfo } from "./addCourses";

const coursesEl = document.getElementById("courses") as HTMLTableElement;

export function getCourses(): void {
  const courses: CourseInfo[] = JSON.parse(
    window.localStorage.getItem("courses") || "[]"
  );

  courses?.map((course) => {
    coursesEl.innerHTML += `
    <tr>
        <td>${course.courseCode}</td>
        <td>${course.courseName}</td>
        <td>${course.prog}</td>
        <td><a href="${course.syllabus}">Länk till kursplan</a></td>
        <td><button class="show-info">Information</button></td>
    </tr>
    `;
  });
}
