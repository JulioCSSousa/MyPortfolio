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
      </Routes>
    </Router>
    </>
  )
}

export default App
