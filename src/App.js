import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from './question52';
import Bio from './Bio';
import Home from "./Home";
import Video from "./Video";
import Education from "./Education";
import "bootstrap/dist/css/bootstrap.css";
import './js/styles.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Bio />} />
              <Route path="edu" element={<Education />} />
              <Route path="user" element={<Location />} />
              <Route path="video" element={<Video />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
