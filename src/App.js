// FUNCTIONS
import { useEffect, useState } from "react";
import { CoursesCtx, getCourses, closeForm } from "./helper";
// COMPONENTS
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Courses, Login, Register, Logout, Error, NavBar } from "./components";
import Canvas from "./components/Canvas";
// STYLING
import "./App.css";
import "./styles/main.scss";

function App() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses().then(data => setCourses(data))
  }, []);

  return (
    <Router>
      <CoursesCtx.Provider value={{ courses, setCourses }}>
        {/* ROUTES */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/logout" component={Logout} />
          <Route component={Error} />
        </Switch>
        {/* FORMS */}
        <div className="form-overlay" onClick={closeForm}> </div>
        <div id="form">
          <Login />
          <Register />
        </div>
        {/* NAV */}
        <NavBar />
      </CoursesCtx.Provider>
      {/* LOADER */}
      <Canvas />
    </Router>
  );
}

export default App;
