import Navbar from "./Navbar";
import Home from "./Home";
// importing BrowserRouter, Route, and Switch from react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

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
