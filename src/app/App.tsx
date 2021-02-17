import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar, HeaderBanner } from "components";
import { Home, About, Volunteering, Team, Events } from "views";
import { useWindowSize } from "hooks";

const nav_routes = [
  { name: "About", route: "/about", component: About },
  { name: "Events", route: "/events", component: Events },
  { name: "Team", route: "/team", component: Team },
  { name: "Volunteering", route: "/volunteering", component: Volunteering }
];

const other_routes = [{ name: "Home", route: "/", component: Home }];

export default function App(): JSX.Element {
  let windowSize = useWindowSize();

  let routes = nav_routes
    .concat(other_routes)
    .map(item => (
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
          General body meetings every other Tuesday from 7-8pm <br></br>
          Tea++ meetings on the off Tuesdays from 7-8pm             
          </div>
        </HeaderBanner>
        <NavBar windowSize={windowSize} links={nav_routes} />
        {routes}
      </BrowserRouter>
    </div>
  );
}
