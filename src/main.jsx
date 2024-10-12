import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout'; // Main Layout component
import './index.css';

import About from './components/NavItems/About';
import Home from './components/Home';
import Gallery from './components/NavItems/Gallery';
import Admission from './components/NavItems/Admission';
import Blog from './components/NavItems/Blog';
import News from './components/NavItems/News';
import Facilities from './components/NavItems/Facilities';
import Contacts from './components/NavItems/Contacts';
import StudentsCorner from './components/NavItems/StudentsCorner';
import UnderDevelopment from './components/NavItems/UnderDevelopment';
import PrePrimary from './components/NavItems/PrePrimary';
import Primary from './components/NavItems/Primary';
import Middle from './components/NavItems/Middle';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This makes "/" render Home
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
     
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "news",
        element: <News />
      },
      {
        path: "facilities",
        element: <Facilities />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "admission",
        element: <Admission />
      },
      {
        path: "scorner",
        element: <StudentsCorner />
      },
      {
        path: "classes", 
        element: < PrePrimary/>
      },
      {
        path: "classes/preprimary",
        element: <PrePrimary /> 
      },
      {
        path: "classes/primary",
        element: <Primary /> 
      },
      {
        path: "classes/middle",
        element: <Middle /> 
      },
      {
        path: '/home',
        element: <Home/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
