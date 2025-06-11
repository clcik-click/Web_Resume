import './index.css'
import Home from "./Home";
import Resume from './Resume';
import Projects from './Projects';
import Puzzle from './Puzzle';

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MusicBar from './Components/MusicBar';

import { useState } from 'react';

function App() {
  const [expanded, setExpanded] = useState(false);

  const [expanded2, setExpanded2] = useState(false);

  const credits = [
    "Song by Christopher Wong",                         // Original content — creative work
    "Photos by Đức Anh, Hoàng Anh",                     // Original visual contributions
    "Comming soon from prismic.io",                     // Core CMS / main platform
    "Layout from transmit.tailwindui.com",              // Major design/layout inspiration
    "Project page from gridbyexample.com",              // Specific page structure
    "Timeline from cruip.com",                          // Component or layout influence
    "Home page from preline.co",                        // General homepage layout/style
    "Stats bar from bizstream.com",                     // UI component influence
    "Emoji from emojipedia.org",                        // Minor graphical assets
    "Assisted by OpenAI, Google",                       // Indirect general support
  ];

  const stats = [
    { name: "Curiosity Level", value: 100 },
    { name: "Creative Juice", value: 100 },
    { name: "Team Player Energy", value: 100 },
    { name: "Debugging Mojo", value: 92 },
    { name: "Caffeine Reliance", value: 65 },
    { name: "Social Battery", value: 60 },
    { name: "Balance Game (Work/Life)", value: 58 },
    { name: "Search Engine Mastery", value: 99 },
    { name: "Overthinking Tendency", value: 77 },
    { name: "Soccer Comeback Mode", value: 72 },
    { name: "Pottery Precision", value: 28 },
    { name: "Grip Strength (Climbing)", value: 43 },
    { name: "Live Show Enthusiasm", value: 95 },
    { name: "Nutrition Coaching Vibes", value: 82 },
    { name: "Plant Parenting", value: 67 },
    { name: "Broadway Level Hype", value: 98 },
    { name: "Piano Progression", value: 87 },
  ];

  const visibleCredits = expanded2 ? credits : credits.slice(0, 4);

  return (
    <>
      <BrowserRouter>
        <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto scrollbar-custom xl:w-120">
            {/* first column - navigation*/}
            <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-20 lg:flex-none lg:flex-col lg:items-center lg:py-6 lg:px-2 bg-white border-r border-slate-200 shadow-sm h-screen">
              {/* Original ▶️ Here title */}
              <div className="text-lg font-semibold text-slate-700 mb-4 [writing-mode:vertical-rl]">
                ▶️ Here
              </div>

              {/* Navigation Icons */}
              <nav className="flex flex-col gap-4 text-sm font-medium mt-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'bg-pink-100 text-pink-700 font-bold shadow-inner'
                        : 'text-pink-500 hover:bg-slate-200 hover:text-pink-700'
                    }`
                  }
                  title="Home"
                >
                  🏠
                </NavLink>

                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'bg-pink-100 text-pink-700 font-bold shadow-inner'
                        : 'text-pink-500 hover:bg-slate-200 hover:text-pink-700'
                    }`
                  }
                  title="Resume"
                >
                  💼
                </NavLink>

                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'bg-pink-100 text-pink-700 font-bold shadow-inner'
                        : 'text-pink-500 hover:bg-slate-200 hover:text-pink-700'
                    }`
                  }
                  title="Projects"
                >
                  📒
                </NavLink>

                <NavLink
                  to="/puzzle"
                  className={({ isActive }) =>
                    `flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'bg-pink-100 text-pink-700 font-bold shadow-inner'
                        : 'text-pink-500 hover:bg-slate-200 hover:text-pink-700'
                    }`
                  }
                  title="Puzzle"
                >
                  🧩
                </NavLink>   

              </nav>
            </div>

            {/* second column - info*/}
            <div className="relative z-10 mx-auto px-4 pt-10 pb-4 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
              {/* A picture */}
              <a className ="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl">
                <img src="/TAB/Avatar.jpeg" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset sm:rounded-xl lg:rounded-2xl"></div>
              </a>

            <section className="mt-12 hidden lg:block">
              {/* Player Stats Title */}
              <h2 className="text-right text-xl font-bold text-slate-800 border-b border-pink-300 pb-1 mb-6">
                Hoàn Lâm
              </h2>     

              <div className="space-y-4 mt-6 ">
                {(expanded ? stats : stats.slice(0, 4)).map((stat) => (
                  <div key={stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-600">{stat.name}</span>
                      <span className="text-sm  text-slate-600">{stat.value}%</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-pink-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-sm font-semibold text-pink-400 hover:text-pink-600 active:text-pink-700"
              >
                {expanded ? 'Some stats' : 'Full stats'}
              </button>
            </section>

            <MusicBar />

            {/* Social Media */}
            <section className="mt-10 lg:mt-12">
              <h1 className="text-lg font-bold text-slate-800 mb-2">CONNECT</h1>
              <ul role="list" className="space-y-6 text-lg text-blue-600 font-medium mt-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/hoan-lam-3b72a5179/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <span>📜</span>
                    <span className="group-hover:underline">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/clcik-click"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <span>🐈‍⬛</span>
                    <span className="group-hover:underline">GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/playlist/3YetvIRdHfU0WEzadeenLt?si=AyG_ENYHT8eYOEErwcW-sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <span>🎶</span>
                    <span className="group-hover:underline">Spotify</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* Credit Work */}
            <section className="mt-10 lg:mt-12">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Credited Work</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700 text-base/6">
                {visibleCredits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
              {credits.length > 4 && (
                <button
                  onClick={() => setExpanded2(!expanded2)}
                  className="mt-2 text-sm font-semibold text-pink-500 hover:text-pink-700 active:text-pink-900"
                >
                  {expanded2? 'Show less' : 'Show more'}
                </button>
              )}
            </section>

          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/puzzle" element={<Puzzle />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
