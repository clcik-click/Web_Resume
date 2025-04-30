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
          {/* first column - navigation*/}
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
          {/* second column - info*/}
          <div className="relative z-10 mx-auto px-4 pt-10 pb-4 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
            {/* A picture */}
            <a className ="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl">
              <img src="Ramen.jpeg" />
              <div className="absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset sm:rounded-xl lg:rounded-2xl"></div>
            </a>

            {/* Description */}
            <section className = "mt-12 hidden lg:block">
              <p className="mt-2 text-base/7 text-slate-700 lg:line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie facilisis nisi quis placerat. Nulla aliquam, nunc vel tristique hendrerit, neque velit euismod augue, nec facilisis nulla nisl ullamcorper nunc. Pellentesque egestas mauris non gravida efficitur. Pellentesque commodo ex a tempor hendrerit. Integer a metus volutpat, suscipit quam pellentesque, varius augue. Praesent maximus sit amet quam in facilisis. Quisque a sollicitudin tortor. Nunc diam justo, egestas quis tempus a, feugiat dictum dui. Suspendisse bibendum lacus venenatis, mattis odio non, dapibus urna. Nam ac magna semper, auctor urna ac, rutrum metus. Aliquam maximus leo id sem iaculis ornare. Nam sed purus vel quam venenatis convallis at quis augue. Nullam pretium libero eget convallis volutpat. Quisque volutpat sed magna nec lacinia. Ut ultrices tristique justo, dignissim egestas dolor aliquam tempus. Cras sit amet consectetur nisl, in interdum ligula.</p>
              <button type="button" className="mt-2 hidden text-sm/6 font-bold text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block">
                Show more
              </button>
            </section>

            {/* Social Media */}
            <section className="mt-10 lg:mt-12">
              <h1><strong>CONNECT</strong></h1>
              <ul role='list' className="mt-4 flex justify-center gap-10 text-base/7 font-medium text-slate-700 sm:gap-8 lg:flex-col lg:gap-4">
                <li className="flex">
                  <a className="group flex items-center" href="https://www.linkedin.com/in/hoan-lam-3b72a5179/">
                    <span className="hidden sm:ml-3 sm:block">📜 LinkedIn</span>
                  </a>
                </li>

                <li className="flex">
                  <a className="group flex items-center" href="https://github.com/clcik-click">
                    <span className="hidden sm:ml-3 sm:block">😸 GitHub</span>
                  </a>
                </li>

                <li className="flex">
                  <a className="group flex items-center" href="https://open.spotify.com/playlist/3YetvIRdHfU0WEzadeenLt?si=AyG_ENYHT8eYOEErwcW-sg">
                    <span className="hidden sm:ml-3 sm:block">🎶 Spotify</span>
                  </a>
                </li>
              </ul>
            </section>

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
