import { CourseInfo } from "./addCourses";

export function updateCourse(index: number, course: CourseInfo): void {
  const courses: CourseInfo[] = JSON.parse(
    window.localStorage.getItem("courses") || "[]"
  );
  console.log("course");
}
