import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
