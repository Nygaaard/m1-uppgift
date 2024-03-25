const courseCodeEl = document.getElementById("courseCode") as HTMLInputElement;
const courseNameEl = document.getElementById("courseName") as HTMLInputElement;
const progEl = document.getElementById("prog") as HTMLInputElement;
const syllabusEl = document.getElementById("syllabus") as HTMLInputElement;

const coursesEl = document.getElementById("courses") as HTMLTableElement;

export function printCourses() {
  coursesEl.innerHTML += `
    <tr>
        <td>${courseCodeEl.value}</td>
        <td>${courseNameEl.value}</td>
        <td>${progEl.value}</td>
        <td>${syllabusEl.value}</td>
    </tr>
    `;
}
