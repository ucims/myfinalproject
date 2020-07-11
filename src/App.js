import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Contact, Home, About} from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Berikut adalah menu dari web yang dibuat */}
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/contact">Kontak</Link></li>
            <li><Link to="/about">Tentang</Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact  />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
