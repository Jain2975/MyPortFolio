import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './components/Projects'
import OffTopic from './components/OffTopic';

function App() {
  return(
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/offtopic" element={<OffTopic />} />
      </Routes>
    </Router>
  )
}

export default App
