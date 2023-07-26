import Home from "./Home";
import React from "react";
import Infopage from "./Infopage"
import Error from "./Error"
import { Route, Routes } from "react-router-dom";
import Play from "./Play";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Infopage />} />
        <Route path="*" element={<Error />} />
        <Route path="/play/:id" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
