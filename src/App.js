import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePage from './SinglePage';
// import { Helmet } from 'react-helmet';
import List from './List';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Data from './Data';
import Top from './Top';
import './cute.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Top />
        <div className="container">
          <Nav />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <Routes>
                <Route path="/" element={<List />} exact />
                <Route path="/article" element={<List />} exact />
                <Route path="/article/:name" element={<SinglePage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
