import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import BackToTop from "./Components/BackToTop";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
