import "./App.css";
import { Route, Routes, useSearchParams, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { useState, useEffect, useContext } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import Articles from "./pages/Articles";
import { AppContext } from "./context/AppContext";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);
 

  return (
    <div className="w-screen h-full bg-slate-900 flex flex-col overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/courses" element= {<Courses isLoggedIn={isLoggedIn}/>} />
        <Route path="/articles" element= {<Articles isLoggedIn={isLoggedIn}/>} />
        <Route path="/about" element= {<About isLoggedIn={isLoggedIn}/>} />
        <Route path="/contact" element= {<Contact isLoggedIn={isLoggedIn}/>} />
        <Route path="/blog/:blogId" element = {<BlogPage isLoggedIn={isLoggedIn}/>} />
        <Route path="/tags/:tag" element = {<TagPage isLoggedIn={isLoggedIn}/>} />
        <Route path="/categories/:category" element = {<CategoryPage isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />

      </Routes>

    </div>
    )
}

export default App;
