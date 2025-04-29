import './index.css'
import Home from "./Home";
import AboutMe from './AboutMe';
import Projects from './projects';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="bg-gray-800 text-white p-4 flex justify-around">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
            `px-4 py-2 rounded ${isActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`
            }
          >
            HOME
          </NavLink>
          <NavLink 
            to="/about-me" 
            className={({ isActive }) => 
            `px-4 py-2 rounded ${isActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`
            }
          >
            About Me
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
            `px-4 py-2 rounded ${isActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`
            }
          >
            Projects
          </NavLink>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
