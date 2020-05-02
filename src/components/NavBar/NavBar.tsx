import React, { Component } from 'react';
import './NavBar.scss';

function NavLink(props: any): JSX.Element {
    return (
    <a className="navlink">
        {props.name}
    </a>
    )
}

export class NavBar extends Component {
  render(): JSX.Element {
    return (
        <nav>
            <NavLink name="hello"/>
        </nav>
    );
  }
}
