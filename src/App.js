import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Categories from './components/Categories';
import Services from './components/Services';
import './App.css';
import './css/global.css';
import Login from './components/Login';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Categories />
      <Services />
      <Footer />
      <Footer1 />
      {/* <Login /> */}

    </div>
  );
}

export default App;
