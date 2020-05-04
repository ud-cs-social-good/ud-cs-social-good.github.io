import React, { Component } from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
import logo from 'assets/images/cssg_logo_purple.svg';

function NavLink(props: any): JSX.Element {
  return (
    <button className='navlink'>
      <Link to={props.route}>
        {props.children}
      </Link>
    </button>
  )
}

function NavList(props: any): JSX.Element {
  let links: [JSX.Element] = (props.links).map((link: any) => (
    <li key={link.name}>
      <NavLink route={link.route}>{link.name}</NavLink>
    </li>
  ));
  return (
    <ul className='navlist'>{links}</ul>
  );
}

export class NavBar extends Component {
  render(): JSX.Element {
    let links = [
      {name: 'Events', route: '/about'},
      {name: 'Team', route: '/'},
      {name: 'Volunteering', route: '/'},
    ];
    return (
      <nav>
        <div className='navcontents'>
          <NavLink route='/'>
            <img className='navimage' src={logo} alt='CS + Social Good Logo'/>
          </NavLink>
          <NavList links={links}/>
        </div>
      </nav>
    );
  }
}
