import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import About from './views/About/about';
import Home from './views/Home/home';
import Contact from './views/Contact/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <><Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <Footer/>
    </>
);
