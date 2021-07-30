import { createContext } from "react";
import Swal from "sweetalert2";

export const API = "https://course-booking-server.herokuapp.com/api";

export const handleInput = (e, state, set) => {
  const { name, value } = e.target
  set({ ...state, [name]: value })
}

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
    console.error(err);
    Swal.fire(
      "Fetching Error",
      "Can't currently get the courses data. Please try again later.",
      "error"
    );
  }
};

export const showForm = () => {
  const overlay = document.querySelector(".form-overlay")
  const form = document.querySelector("#form")
  overlay.style.display = "block";
  form.classList.add("show-form");
};

export const closeForm = () => {
  const overlay = document.querySelector(".form-overlay")
  const form = document.querySelector("#form")
  fadeOut(form)
  fadeOut(overlay)
}

export const CoursesCtx = createContext();
