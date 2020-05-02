import React, { Component } from 'react';
import './NavBar.scss'
import logo from 'assets/cssg_logo_black.svg';

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

export class NavBar extends Component {
  render(): JSX.Element {
    let logo_obj  = {src: logo, alt: "CS + Social Good Logo"};

    return (
      <nav>
        <NavLink img={logo_obj}/>
      </nav>
    );
  }
}
