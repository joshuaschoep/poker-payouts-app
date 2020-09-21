import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Payout from './Payout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/payout" component={Payout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
