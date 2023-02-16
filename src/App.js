import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Photos from "./Photos";
import Infor from "./components/Infor";
import Images from "./components/Images";
function App() {
  return (
    <div className="container mt-5">
      <Link className="mx-5" to={""}>
        Home
      </Link>
      <Link className="mx-5" to={"./about"}>
        About
      </Link>
      <Link className="mx-5" to={"./photo"}>
        Photo
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photo" element={<Photos />} />
        <Route path="/photo/:id" element={<Images />} />
        <Route path="/about/:name" element={<Infor />} />
      </Routes>
    </div>
  );
}

export default App;
