import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar-container">
            <h1 className="nav-brand">React JS</h1>
            <Link className="nav-menu" to="/">Home</Link>
            <Link className="nav-menu" to="/About">About</Link>
            <Link className="nav-menu" to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar;