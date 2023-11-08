import React from "react";
import Initial from "./components/Initial";
import Presentation from "./components/Presentation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/a" element={<Initial />} />
            <Route path="/" element={<Presentation />} />
            {/* <Route path='/' element={<Home />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
