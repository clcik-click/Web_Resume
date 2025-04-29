import './index.css'
import Home from "./Home";
import AboutMe from './AboutMe';
import Projects from './projects';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
          {/* first column */}
          <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:px-12 lg:text-sm/7 lg:whitespace-nowrap lg:[writing-mode:vertical-rl]">
            <div className="text-lg font-semibold text-slate-700 mb-4">▶️ Here</div>
            <NavLink to="/" 
              className={({ isActive }) => `block py-2 px-4 rounded-md text-slate-600 hover:bg-slate-200 hover:text-slate-900 
              ${isActive ? 'bg-slate-300 text-slate-900 font-bold' : ''}`}>🏠</NavLink>
            <NavLink to="/about-me" 
              className={({ isActive }) => 
              `block py-2 px-4 rounded-md text-slate-600 hover:bg-slate-200 hover:text-slate-900
              ${isActive ? 'bg-slate-300 text-slate-900 font-bold' : ''}`}>😚</NavLink>
            <NavLink to="/projects" 
              className={({ isActive }) => 
              `block py-2 px-4 rounded-md text-slate-600 hover:bg-slate-200 hover:text-slate-900 
              ${isActive ? 'bg-slate-300 text-slate-900 font-bold' : ''}`}>📒</NavLink>
          </div>
          {/* second column */}
          <div className="relative z-10 mx-auto px-4 pt-10 pb-4 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
            <div>Picture</div>
            <div>Wesite Purpose</div>
            <div>Social Media</div>
          </div>
         
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
