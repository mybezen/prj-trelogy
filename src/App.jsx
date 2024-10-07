import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Load from "./pages/Load";
import SumpahPemuda from "./pages/SumpahPemuda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/load" element={<Load />} />
        <Route path="/ikrar" element={<SumpahPemuda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
