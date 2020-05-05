import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from 'components';
import { Home } from 'views';

const links = [
  {name: 'Events', route: '/about'},
  {name: 'Team', route: '/'},
  {name: 'Volunteering', route: '/'},
];

export default function App(): JSX.Element {

  return (
      <div className="App">
        <BrowserRouter>
          <NavBar links={links}/>
            <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </div>
  );
}

