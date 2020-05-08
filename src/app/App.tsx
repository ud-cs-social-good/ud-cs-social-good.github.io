import React  from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from 'components';
import { Home } from 'views';
import { useWindowSize } from 'hooks';

const links = [
  {name: 'Events', route: '/todo'},
  {name: 'Team', route: '/todo'},
  {name: 'Volunteering', route: '/todo'},
];

export default function App(): JSX.Element {
  let windowSize = useWindowSize();

  return (
      <div className="App">
        <BrowserRouter>
          <NavBar
            windowSize={windowSize}
            links={links}
          />
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </div>
  );

}
