// FUNCTIONS
import { useEffect } from 'react';
// COMPONENTS
import { Navbar } from "react-bootstrap"
import { SearchBar, NavItems } from "./NavElems"
// IMAGES / ICONS
import Logo from "../../svgs/logo_white.svg"
import { useLocation } from "react-router-dom"

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    // add a showbg classname to navbar if scrolled past 100px
    const nav = document.querySelector("#main-nav")
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 5) {
        nav.classList.remove("home")
      } else {
        nav.classList.add("home")
      }
    }
    if (location.pathname === "/")
      window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <Navbar id="main-nav" className={location.pathname === "/" ? "home" : ""}>
      <Navbar.Brand href="/">
        <img src={Logo} alt="Brain Course Icon" />
      </Navbar.Brand>
      <SearchBar />
      <NavItems />
    </Navbar>
  )
}

export default NavBar
