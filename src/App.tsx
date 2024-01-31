import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./components/main/Landing";
import Home from "./components/main/Home";
import Layout from "./components/main/Layout";
import About from "./components/main/About";
import Platform from "./components/main/Platform";
import Endorsements from "./components/main/Endorsements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="platform" element={<Platform />} />
          <Route path="endorsements" element={<Endorsements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
