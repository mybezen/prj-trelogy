import AOS from "aos"; // Import AOS as default export
import "aos/dist/aos.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SumpahPemuda from "./pages/SumpahPemuda";
import StrugglePages from "./pages/Struggle";
import BlogPage from "./pages/Blog";
import { useEffect } from "react"; // You need useEffect to initialize AOS on component mount
import ContactPage from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init();
  }, []); // This ensures AOS is initialized once after component mount

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ikrar" element={<SumpahPemuda />} />
        <Route path="/strug" element={<StrugglePages />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path='/kontak' element={<ContactPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
