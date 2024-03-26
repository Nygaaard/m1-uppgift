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
        <td id="courseCode-${index}" class="editable">${course.courseCode}</td>
        <td id="courseName-${index}" class="editable">${course.courseName}</td>
        <td id="prog-${index}" class="editable">${course.prog}</td>
        <td ><a href="${course.syllabus}" id="syllabus-${index}">Länk till kursplan</a></td>
        <td><i class="fa-solid fa-check"></i></td>
    </tr>
    `;
  });
  const icons = document.querySelectorAll("i") as NodeListOf<HTMLElement>;

  icons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      updateCourse(index);
    });
  });
}
