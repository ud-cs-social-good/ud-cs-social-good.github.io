import React, { Component } from 'react';
import './NavBar.scss'
import logo from 'assets/images/cssg_logo_purple.svg';

function NavLink(props: any): JSX.Element {
  return (
    <button className="navlink">
      {props.children}
    </button>
  )
}

function NavList(props: any): JSX.Element {
  let links: [JSX.Element] = (props.links).map((link: any) => (
    <li key={link.name}><NavLink>{link.name}</NavLink></li>
  ));
  return (
    <ul className="navlist">{links}</ul>
  );
}

export class NavBar extends Component {
  render(): JSX.Element {
    let links = [
      {name: "Home"},
      {name: "Events"},
      {name: "Team"},
      {name: "Volunteering"},
    ];
    return (
      <nav>
        <div className="navcontents">
          <NavLink>
            <img className="navimage" src={logo} alt="CS + Social Good Logo"/>
          </NavLink>
          <NavList links={links}/>
        </div>
      </nav>
    );
  }
}
