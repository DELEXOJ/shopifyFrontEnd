import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<NavBar />}/>
      <Route path="/main" element={<Main />}/>
    </Routes>
    </Router>
  );
}

export default App;
