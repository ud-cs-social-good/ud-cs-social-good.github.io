import React, { Component } from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
import logo from 'assets/images/cssg_logo_purple.svg';

type NavProps = {
  links: {name:string, route:string}[],
}

export class NavBar extends Component<NavProps> {
  render(): JSX.Element {
    return (
      <nav>
        <div className='navcontents'>
          <NavLink route='/'>
            <img className='navimage' src={logo} alt='CS + Social Good Logo'/>
          </NavLink>
          <NavList links={this.props.links}/>
        </div>
      </nav>
    );
  }
}

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
