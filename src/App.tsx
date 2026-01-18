import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
// importing BrowserRouter, Route, and Switch from react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create.tsx";
import BlogDetails from "./BlogDetails.tsx";
import NotFound from "./NotFound.tsx";
function App() {
  return (
    //using BrowserRouter, Route, and Switch
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
