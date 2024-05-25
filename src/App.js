import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
        <Home/>
        </div> 
      </div>
    </Router>
  );
}

export default App;
