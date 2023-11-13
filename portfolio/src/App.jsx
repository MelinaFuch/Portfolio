import React from "react";
import Initial from "./components/Initial";
import PresentationLaboral from "./components/Presentation/PresentationLaboral";
import PresentationPersonal from "./components/Presentation/PresentationPersonal";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills_Education/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/a" element={<PresentationLaboral />} />
            <Route path="/b" element={<PresentationPersonal />} />
            <Route path="/c" element={<Projects />} />
            <Route path="/d" element={<Skills />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
