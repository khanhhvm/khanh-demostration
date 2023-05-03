import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from './question52';
import Home from "./Home";
import Animation from "./Animation";
import Input from "./KhanhHoang";
import Video from "./Video";
import VrWebgl from "./WebGLdemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="user" element={<Location />} />
            <Route path="input" element={<Input />} />
            <Route path="animation" element={<Animation />} />
            <Route path="video" element={<Video />} />
            <Route path="vrwebgl" element={<VrWebgl />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
