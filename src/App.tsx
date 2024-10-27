import {About} from "./Pages/About/About";
import Home from "./Pages/Home/Home"
import {Projects} from "./Pages/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="https://lar-doce-ar.netlify.app" />
        <Route path="https://github.com/JulioCSSousa/front-ecommerce" />
        <Route path="https://back-ecommerce-wl58.onrender.com/" />
        <Route path="https://github.com/JulioCSSousa/back-ecommerce" />
        <Route path="https://github.com/JulioCSSousa/back-ecommerce" />
      </Routes>
    </Router>
    </>
  )
}

export default App
