import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CoursesCtx } from "../../helper";
import Instructor from "./Instructor";
import CourseCard from "./Card"

const Course = () => {
  const [course, setCourse] = useState(null);
  const [instructors, setInstructors] = useState(null);
  const { courses, instructors: IData } = useContext(CoursesCtx);
  const loc = useLocation();

  // SETTING UP THE COURSE DATA
  useEffect(() => {
    const query = new URLSearchParams(loc.search.slice(1));
    setCourse(courses?.filter((C) => C._id === query.get("id"))[0]);
  }, [courses, loc]);

  // SETTING UP THE INSTRUCTOR/S
  useEffect(() => {
    if (course) {
      const instructorData = course.instructors.map(I => I.instructorId);
      const CI = IData.filter(I => instructorData.includes(I._id));
      setInstructors(CI);
    }
  }, [course, IData])

  return (
    <main className="main">
      <section
        id="courseHeader"
        style={{ background: `url(${course?.image}) no-repeat center`, backgroundSize: course ? "100%" : "0%" }}
      >
        <h1 id="courseName">{course?.name}</h1>
      </section>
      <section id="courseBody">
        <div>
          <div id="courseAbout" className="details">
            <h2>About</h2>
            <p id="courseDescription">{course?.description}</p>
          </div>
          <div id="instructors" className="details">
            <h2>Instructors</h2>
            {instructors?.map(I => <Instructor {...I} />)}
          </div>
        </div>
        <CourseCard course={course} />
      </section>
    </main>
  );
};

export default Course;
