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

const route_links = [
  {name: 'Home', route: '/', component: Home},
  {name: 'About', route: '/about', component: About},
  {name: 'Events', route: '/events', component: Events},
  {name: 'Team', route: '/team', component: Team},
  {name: 'Volunteering', route: '/volunteering', component: Volunteering},
];

export default function App(): JSX.Element {
  let windowSize = useWindowSize();

  let navlinks = route_links.filter((item) => {
    // Don't want to display 'Home' on the navbar so filter it out
    // of navlinks
    return item.name !== 'Home';
  }).map((item) => {
    return {name: item.name, route: item.route};
  });

  let routes = route_links.map((item) => (
      <Route key={item.name} exact path={item.route} component={item.component}/>
  ));

  return (
      <div className="App">
        <BrowserRouter>
          <HeaderBanner>
            <div>
              Meeting will resume in the 2020 fall semester
            </div>
          </HeaderBanner>
          <NavBar
            windowSize={windowSize}
            links={navlinks}
          />
          {routes}
        </BrowserRouter>
      </div>
  );

}
