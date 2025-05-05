import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Blockpage from "../pages/blockpage/block";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/block" element={<Blockpage />} />
      {/* 404 Route */}
    </Routes>
  );
}

export default App;
