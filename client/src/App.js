import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { SearchBar } from './components/SearchBar';
import { MemberPage } from './components/MemberPage';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={() => <Header />} />
        <Route exact path="/" render={() => <SearchBar />} />
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/:memberID" render={() => <MemberPage />} />
        <Route exact path="/about" render={() => <About />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
