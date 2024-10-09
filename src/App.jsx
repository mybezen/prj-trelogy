import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Load from "./pages/Load";
import SumpahPemuda from "./pages/SumpahPemuda";
import StrugglePages from "./pages/Struggle";
import BlogPage from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/load" element={<Load />} />
        <Route path="/ikrar" element={<SumpahPemuda />} />
        <Route path='/strug' element={<StrugglePages />}/>
        <Route path='/blog' element={<BlogPage  />} />

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
