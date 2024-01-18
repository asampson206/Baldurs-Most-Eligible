
import { NavLink } from "react-router-dom";
// import "./NavBar.css";

function Navbar(){
return(
    <nav className="navbar">
    <NavLink
        to="/"
        className="nav-link">
        Home
      </NavLink>
      
      <NavLink
        to="/Astarion"
        className="nav-link" >
        Astarion
      </NavLink>
      <NavLink
        to="/Shadowheart"
        className="nav-link" >
        Shadowheart
      </NavLink>
      <NavLink
        to="/Karlach"
        className="nav-link" >
        Karlach
      </NavLink>

    </nav>
)
}











export default Navbar