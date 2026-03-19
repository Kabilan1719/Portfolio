import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

function App(){
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
      </Routes>
    </>
  )
}

export default App;