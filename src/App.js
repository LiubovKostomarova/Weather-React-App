import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import LeftInfo from "./components/LeftInfo/LeftInfo.js";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <section className="container">
        <Header />
        <LeftInfo />
        <Sidebar />
      </section>
    </>
  );
}

export default App;
