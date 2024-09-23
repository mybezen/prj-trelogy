import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Load from "./pages/Load";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/load" element={<Load />} />       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
