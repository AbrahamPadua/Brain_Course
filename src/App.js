// FUNCTIONS
import { useEffect, useState } from "react";
import { CoursesCtx, getCourses, UserCtx, FormCtx, closeForm } from "./helper";
// COMPONENTS
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Courses, Login, Register, Logout, Error, NavBar, Footer } from "./components";
import Canvas from "./components/Canvas";
// STYLING
import "./styles/main.scss";

function App() {
  const [formType, setFormType] = useState("")
  const [courses, setCourses] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    getCourses().then(data => setCourses(data))
  }, []);

  return (
    <Router>
      <FormCtx.Provider value={{ formType, setFormType }} >
        <CoursesCtx.Provider value={{ courses, setCourses }}>
          <UserCtx.Provider value={{ user, setUser }}>
            {/* ROUTES */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/courses" component={Courses} />
              <Route path="/logout" component={Logout} />
              <Route component={Error} />
            </Switch>
            {/* FOOTER */}
            <Footer />
            {/* FORMS */}
            <div className="form-overlay" onClick={() => closeForm(formType)} />
            <section className="form">
              {formType === "login" ? <Login /> : <Register />}
            </section>
            {/* NAV */}
            <NavBar />
          </UserCtx.Provider>
        </CoursesCtx.Provider>
      </FormCtx.Provider>
      {/* LOADER */}
      <Canvas />
    </Router>
  );
}

export default App;
