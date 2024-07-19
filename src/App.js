import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Start from "./component/Start";
import Dictionary from "./component/Dictionary";
import Mypage from "./component/Mypage";
import Register from "./component/Register";
import Topicdetail from "./component/Topicdetail";
import Discussion from "./component/Discussion";
import Search from "./component/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/start" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/topicdetail/:id" element={<Topicdetail />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;