
import { NavLink } from "react-router-dom"

function Navbar(){
  const navStyle = {
    display: "flex",
    justifyContent: 'center'
    
  }
  const linkStyle = {
    margin: "1rem",
    color: 'black',
  display: 'block'}
return(
    <nav style={navStyle}>
    <NavLink
        to="/"
        className="nav-link"
        style={linkStyle}>
        Home
      </NavLink>
      
      <NavLink
        to="/Astarion"
        className="nav-link"
        style={linkStyle} >
        Astarion
      </NavLink>
      <NavLink
        to="/Shadowheart"
        className="nav-link"
        style={linkStyle} >
        Shadowheart
      </NavLink>
      <NavLink
        to="/Karlach"
        className="nav-link" 
        style={linkStyle}>
        Karlach
      </NavLink>

    </nav>
)
}



export default Navbar