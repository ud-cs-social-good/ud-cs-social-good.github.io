import React  from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from 'components';
import { Home, About } from 'views';
import { useWindowSize } from 'hooks';

const route_links = [
  {name: 'About', route: '/about', component: About},
  {name: 'Events', route: '/events', component: Home},
  {name: 'Team', route: '/team', component: Home},
  {name: 'Volunteering', route: '/volunteering', component: Home},
];

export default function App(): JSX.Element {
  let windowSize = useWindowSize();

  let links = route_links.map((item) => {
    return {name: item.name, route: item.route}
  });

  let routes = route_links.map((item) => (
      <Route key={item.name} exact path={item.route} component={item.component}/>
  ));

  return (
      <div className="App">
        <BrowserRouter>
          <NavBar
            windowSize={windowSize}
            links={links}
          />
          <Route exact path="/" component={Home}/>
          {routes}
        </BrowserRouter>
      </div>
  );

}
