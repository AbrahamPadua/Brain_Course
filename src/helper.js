import { createContext } from "react";
import Swal from "sweetalert2";

export const API = process.env.REACT_APP_API + "/api";

// CONTEXTS

export const FormCtx = createContext();
export const CoursesCtx = createContext();
export const UserCtx = createContext();


// FUNCTIONS

export const handleInput = (e, state, set) => {
  const { name, value } = e.target;
  set({ ...state, [name]: value });
};

export const fadeOut = (el) => {
  let op = 1;
  let v = 0.001;
  let timer = window.setInterval(() => {
    if (op <= 0.01) {
      clearInterval(timer);
      el.style.display = "none";
    }
    el.style.opacity = op;
    op -= op * v;
    v += v * 0.2;
  }, 30);
};

export const getCourses = async () => {
  try {
    const res = await fetch(`${API}/courses`);
    const jsonRes = await res.json();
    return jsonRes.data;
  } catch (err) {
    Swal.fire(
      "Fetching Error",
      "Can't currently get the courses data. Please try again later.",
      "error"
    );
    return [];
  }
};

const getForms = () => {
  const form = document.querySelector(".form");
  const overlay = document.querySelector(".form-overlay");
  return [form, overlay]
}

export const showForm = () => {
  const FORM = getForms();
  FORM.forEach(el => el?.classList.add("show"));
};

export const closeForm = () => {
  const FORM = getForms();
  FORM.forEach(el => el?.classList.remove("show"));
};
