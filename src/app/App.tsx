import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from 'components';
import { Home } from 'views';


function App(): JSX.Element {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
            <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
