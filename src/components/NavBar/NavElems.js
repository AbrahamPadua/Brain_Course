// FUNCTIONS
import { useState, useContext, useRef } from "react";
import { partial_ratio, token_set_ratio } from "fuzzball";
// COMPONENTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem, NavLink } from "react-bootstrap";
// IMAGES / ICONS
import Magnifier from "../../svgs/magnifier.svg";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
// CTX
import { CoursesCtx, getCourses } from "../../helper";

export const SearchBar = () => {
  const { courses, setCourses } = useContext(CoursesCtx);
  const searchInput = useRef();
  const [hideEraser, setHideEraser] = useState("hidden");
  const [searchData, setSearchData] = useState([]);

  const search = ({ target: { value } }) => {
    if (value) {
      // GETTING COURSES
      if (!courses.length) {
        getCourses().then((data) => setCourses(data));
        return;
      }
      // FILTERING COURSES USING QUERY
      const results = courses.filter((C) => {
        const ratio1 = partial_ratio(C.name, value);
        const ratio2 = token_set_ratio(C.name, value);
        return ratio1 > 80 ?? ratio2 > 50;
      });
      // SETTING DISPLAYED DATA
      setSearchData(results);
      setHideEraser("");
    } else {
      erase();
    }
  };

  const erase = () => {
    // RESETING INPUT
    setSearchData([]);
    setHideEraser("hidden");
    searchInput.current.value = "";
  };

  return (
    <div id="search-wrapper">
      <div id="search-bar">
        <label htmlFor="search" id="search-img">
          <img src={Magnifier} alt="search icon" />
        </label>
        <input type="search" name="search" id="search" placeholder="Search a Course" onInput={search} ref={searchInput} />
        <FontAwesomeIcon
          icon={faEraser}
          className={hideEraser ?? ""}
          onClick={erase}
        />
      </div>
      <div id="results">
        {searchData.map((C) => (
          <Result course={C} key={C._id} />
        ))}
      </div>
    </div>
  );
};

const Result = ({ course }) => (
  <div id={`${course._id}`} className="result">
    <div
      className="resultImg"
      style={{
        background: `url(${course.image}) no-repeat center`,
        backgroundSize: "100%",
      }}
    ></div>
    <h4>{`${course.name}`}</h4>
  </div>
);

export const Item = ({ name, link }) => {


  return (
    <NavItem onClick={showForm}>
      <NavLink href={`#${link}`}>
        <div className="nav-wrapper" id={`${link}-wrapper`}>
          {name}
        </div>
      </NavLink>
    </NavItem>
  );
};

export const NavItems = () => {
  const links = [
    { name: "Login", link: "login", key: "1_login" },
    { name: "Sign Up", link: "register", key: "2_register" },
  ];
  return (
    <ul id="zuitterNav">
      {links.map((l) => (
        <Item {...l} key={l.key} />
      ))}
    </ul>
  );
};
