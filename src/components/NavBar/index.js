// COMPONENTS
import { Navbar } from "react-bootstrap"
import { SearchBar, NavItems } from "./NavElems"
// IMAGES / ICONS
import Logo from "../../svgs/logo_white.svg"
import { useLocation } from "react-router-dom"

const NavBar = () => {
  const location = useLocation()

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
