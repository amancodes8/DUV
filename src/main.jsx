import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout'; // Main Layout component
import './index.css';

import About from './components/NavItems/About';
import Home from './components/Home';
import Login from './components/NavItems/Login';
import Gallery from './components/NavItems/Gallery';
import Admission from './components/NavItems/Admission';
import Blog from './components/NavItems/Blog';
import News from './components/NavItems/News';
import Facilities from './components/NavItems/Facilities';
import Contacts from './components/NavItems/Contacts';
import StudentERP from './components/StudentERP';
import StudentsCorner from './components/NavItems/StudentsCorner';
import UnderDevelopment from './components/NavItems/UnderDevelopment'; // Import the UnderDevelopment component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/facilities",
        element: <Facilities />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/admission",
        element: <Admission />
      },
      {
        path: "/studenterp",
        element: <StudentERP />
      },
      {
        path: "/scorner",
        element: <StudentsCorner />
      },
      {
        path: "/classes", 
        element: <UnderDevelopment />
      },
      {
        path: "/classes/math",
        element: <UnderDevelopment /> 
      },
      {
        path: "/classes/science",
        element: <UnderDevelopment /> 
      },
      {
        path: "/classes/history",
        element: <UnderDevelopment /> 
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
