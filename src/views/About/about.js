import Navbar from "../../components/Navbar/navbar"
import Footer from "../../components/Footer/footer"
import "./about.css"

export default function About(){
    return(
        <div className="about-container">
            <Navbar/>
            <h1>About</h1>
            <p>This is a Aboutpage to create to using by React Javascript.</p>
            <Footer/>
        </div>
    )
}