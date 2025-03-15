// import Blog from "./pages/Blogs/Blog";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs" element={<Blog />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
}

export default App;
