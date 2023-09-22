import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/home';
import About from './views/About/about';
import Contact from './views/Contact/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/About",
        element:<About/>
    },
    {
        path:"/Contact",
        element:<Contact/>
    },
]);

root.render(<RouterProvider router={router}/>);
