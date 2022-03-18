import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CreatePost from "./pages/CreatePost";

import Login from "./pages/Login";
import Error from "./pages/Error";
import Post from "./components/Post";
import MobileNav from "./components/MobileNav";
import { useGlobalContext } from "./context";
import Footer from "./components/Footer/Footer";
function App() {
  const { menu } = useGlobalContext();
  return (
    <Router>
      <Navbar />
      {menu && <MobileNav />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
