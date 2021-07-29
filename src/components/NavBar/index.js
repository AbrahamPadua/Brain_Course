// COMPONENTS
import { Navbar } from "react-bootstrap"
import { SearchBar, NavItems } from "./NavElems"
// IMAGES / ICONS
import Logo from "../../svgs/logo_white.svg"

const NavBar = () => {
  return (
    <Navbar id="main-nav">
      <Navbar.Brand href="/">
        <img src={Logo} alt="Brain Course Icon" />
      </Navbar.Brand>
      <SearchBar />
      <NavItems />
    </Navbar>
  )
}

export default NavBar
