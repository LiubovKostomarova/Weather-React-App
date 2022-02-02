import React from 'react'
import './App.css';
import Header from './components/Header';
import LeftInfo from './components/LeftInfo.js';
import Sidebar from './components/Sidebar';
import background from "./images/background.jpg";



function App() {
  return (
    <>
      <section className='container' style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <LeftInfo />
        <Sidebar />
      </section>
    </>
  );
}

export default App;