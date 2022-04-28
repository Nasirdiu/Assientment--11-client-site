import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Share/Header/Header";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/Share/NotFound/NotFound";
import Login from "./components/Login/Login/Login";
import Blog from "./components/Home/Blog/Blog";
import About from "./components/Home/About/About";
import Footer from './components/Share/Footer/Footer'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
