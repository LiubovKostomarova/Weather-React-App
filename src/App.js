import React from 'react'
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header/Header' ;
import LeftInfo from './components/LeftInfo/LeftInfo.js';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
      <section className='container' >
        <Header />
        <LeftInfo />
        <Sidebar />
        <Chart/>
      </section>
    </>
  );
}

export default App;