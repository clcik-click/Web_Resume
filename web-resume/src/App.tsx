import "./index.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Puzzle from "./pages/Puzzle";
import Resume from "./pages/Resume";

const Story = lazy(() => import("./pages/Story"));

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route
            path="/story"
            element={
              <Suspense fallback={null}>
                <Story />
              </Suspense>
            }
          />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
