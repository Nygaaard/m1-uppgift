import { CourseInfo } from "./addCourses";
import { updateCourse } from "./updateCourses";

const coursesEl = document.getElementById("courses") as HTMLTableElement;

export function getCourses(): void {
  const courses: CourseInfo[] = JSON.parse(
    window.localStorage.getItem("courses") || "[]"
  );

  courses?.map((course, index) => {
    coursesEl.innerHTML += `
    <tr class="table-row">
        <td>${course.courseCode}</td>
        <td>${course.courseName}</td>
        <td>${course.prog}</td>
        <td><a href="${course.syllabus}">Länk till kursplan</a></td>
        <td><i class="fa-solid fa-check" id="check-${index}" onclick="updateCourse(
      ${index},
      '${course}'
    )"></i></td>
    </tr>
    `;
  });
}
