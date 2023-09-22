import "./navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar-container">
            <h1 className="nav-brand">React JS</h1>
            <a className="nav-menu">Home</a>
            <a className="nav-menu">About</a>
            <a className="nav-menu">Contact</a>
        </div>
    )
}