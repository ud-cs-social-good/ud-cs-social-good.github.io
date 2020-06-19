import React  from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import {
  NavBar,
  HeaderBanner
} from 'components';
import {
  Home,
  About,
  Volunteering,
  Team,
  Events,
} from 'views';
import { useWindowSize } from 'hooks';

const home_link = {name: 'Home', route: '/', component: Home};

const links = [
  {name: 'About', route: '/about', component: About},
  {name: 'Events', route: '/events', component: Events},
  {name: 'Team', route: '/team', component: Team},
  {name: 'Volunteering', route: '/volunteering', component: Volunteering},
];

export default function App(): JSX.Element {
  let windowSize = useWindowSize();

  let routes = links.concat([home_link]).map((item) => (
    <Route
      key={item.name}
      exact
      path={item.route}
      component={item.component}
    />
  ));

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBanner>
          <div>
            Meetings will resume in the 2020 fall semester
          </div>
        </HeaderBanner>
        <NavBar
          windowSize={windowSize}
          links={links}
        />
        {routes}
      </BrowserRouter>
    </div>
  );

}
