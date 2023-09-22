import "./contact.css"
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

export default function Contact(){
    return(
        <div className="contact">
            <Navbar/>
            <h1>Contact</h1>
            <p>This is a Contactpage to create to using by React Javascript.</p>
            <Footer/>
        </div>
    )
}