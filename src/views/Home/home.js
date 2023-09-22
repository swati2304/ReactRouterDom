import "./home.css"
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

export default function Home(){
    return(
        <div className="home">
            <Navbar/>
            <h1>Home</h1>
            <p>This is a Homepage to create to using by React Javascript.</p>
            <Footer/>
        </div>
    )
}