import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App';
import About from './components/About/about';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import User from './components/User/user';
import Github, { githubInfoLoader } from './components/Github/github';

// const router = createBrowserRouter([
//     { 
//       path: '/', 
//       element: <App /> ,
//       children: [
//         {
//           path: "",
//           element: <Home />,
//         },
//         {
//           path: "about",
//           element: <About />,
//         },
//         {
//           path: "contact",
//           element: <Contact />,
//         }
//       ]
//     },
//   ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
        path='github' 
        element={<Github />} 
        loader={githubInfoLoader}
      />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
