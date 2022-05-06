import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Share/Header/Header";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/Share/NotFound/NotFound";
import Login from "./components/Login/Login/Login";
import Blog from "./components/Home/Blog/Blog";
import About from "./components/Home/About/About";
import Footer from "./components/Share/Footer/Footer";
import SingUp from "./components/Login/SingUp/SingUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddItem from "./components/All Item/AddItem/AddItem";
import MyItemAll from "./components/All Item/MyItemAll/MyItemAll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ManageItem from "./components/All Item/ManageItem/ManageItem";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SingUp></SingUp>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/myadditem" element={<MyItemAll></MyItemAll>}></Route>
        <Route
          path="/manageitem/:id"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
