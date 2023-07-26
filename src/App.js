import Home from "./Home";
import React from "react";
import Infopage from "./Infopage"
import Error from "./Error"
import { Route, Routes } from "react-router-dom";
import WatchingMovie from "./WatchingMovie";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Infopage />} />
        <Route path="*" element={<Error />} />
        <Route path="/watchingmovie/:id" element={<WatchingMovie />} />
      </Routes>
    </>
  );
}

export default App;
