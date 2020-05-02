import React, { Component } from 'react';
import './NavBar.scss'
import logo from 'assets/images/cssg_logo_purple.svg';

function NavLink(props: any): JSX.Element {
  let img: JSX.Element | null = null;
  if (props.img) {
    img = (
      <img className="navimage" src={props.img.src} alt={props.img.alt}/>
    );
  }
  return (
    <button className="navlink">
      {img}
      {props.name}
    </button>
  )
}

function NavList(props: any): JSX.Element {
  let links: [JSX.Element] = (props.links).map((link: any) => (
    <li><NavLink name={link.name}/></li>
  ));
  return (
    <ul className="navlist">{links}</ul>
  );
}

export class NavBar extends Component {
  render(): JSX.Element {
    let logo_obj  = {src: logo, alt: "CS + Social Good Logo"};
    let links = [
      {name: "Home"},
      {name: "Events"},
      {name: "Team"},
      {name: "Volunteering"},
    ];
    return (
      <nav>
        <div className="navcontents">
        <NavLink img={logo_obj}/>
        <NavList links={links}/>
        </div>
      </nav>
    );
  }
}
