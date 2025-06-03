import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from './question52';
import IndexPage from './IndexPage';
import Bio from './Bio';
import Home from "./Home";
import Video from "./Video";
import Education from "./Education";
import Loader from "./Loader";

import "bootstrap/dist/css/bootstrap.css";
import './js/styles.css';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App">
      {isLoading && <Loader />}
      {!isLoading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />}>
              {/*<Route path="/" element={<IndexPage />} />
              <Route path="edu" element={<Education />} />
              <Route path="user" element={<Location />} />
              <Route path="video" element={<Video />} />
              */}
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
