import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Offtopic from "./components/OffTopic";
import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/offtopic" element={<Offtopic />} />
      </Routes>
    </Router>
  );
}

export default App;
