import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              
             
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
