import { useContext, useEffect, useState } from "react";
import { CoursesCtx, UserCtx } from "../../helper";
import { Card, CardImg } from "react-bootstrap"

const Courses = () => {
  const { courses } = useContext(CoursesCtx);
  const { categories, setCategories } = useState("");

  useEffect(() => {
    console.log(courses);
  }, []);

  return (
    <main id="courses-main">

      <aside id="categories">
        <h1>All Courses</h1>
        <ul>
          <li>
            <a href="./courses?category=neuroscience">Neuroscience</a>
          </li>
        </ul>
      </aside>

      <section id="courses-container" className="d-flex flex-wrap">
        <div id="active-courses" className="courses-inner-container">

          {courses.length ?
            <></> :
            <div id="coursesSpinner" className="spinner-border" role="status">
              <span className="sr-only">
                &nbsp;&nbsp;&nbsp;Fetching Couress
              </span>
            </div>
          }

          {courses.length
            ? courses.map((C) => <Course key={C._id} {...C} />)
            : <></>
          }

        </div>
        <div id="archived-courses" className="courses-inner-container"></div>
      </section>
    </main>
  );
};

const Course = (C) => {
  const { user, setUser } = useContext(UserCtx);
  useEffect(() => { }, []);

  return (
    <>
      <div id={`${C.name.replace(" ", "")}`} className="course-card">
        <div
          className="card-img-top"
          style={{
            background: `url(${C.image}) no-repeat center`,
            backgroundSize: `100%`
          }}
          alt="Card image"
        ></div>
        <Card.Body>
          <div className="course-texts">
            <Card.Title >{C.name}</Card.Title>
            <Card.Text>
              {C.description.length < 200
                ? C.description
                : C.description.slice(0, 200) + "..."}
            </Card.Text>
            <h4>₱{C.price}</h4>
          </div>
          <div className="buttons">
            <a href={`../course/?id=${C._id}`} className="btn btn-primary">
              Details
            </a>
            {
              user?.isAdmin
                ? <>
                  <a href={`../editCourse/?id=${C._id}`} className="btn btn-warning">
                    Edit
                  </a>
                  <a href={`archive${C._id}`} className="btn btn-danger">
                    Archive
                  </a>
                </>
                : <></>
            }
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export default Courses;
