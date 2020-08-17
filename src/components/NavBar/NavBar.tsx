import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "assets/images/cssg_logo_purple.svg";

type NavProps = {
  links: { name: string; route: string }[];
  windowSize: { width: number; height: number };
};

type NavListProps = {
  links: { name: string; route: string }[];
  mobile: boolean;
};

type NavLinkProps = {
  children: JSX.Element;
  route: string;
};

type NavTogglerProps = {
  children: JSX.Element;
  mobile: boolean;
  toggled: boolean;
  toggle: () => void;
};

export function NavBar(props: NavProps): JSX.Element {
  let [toggled, setToggled] = useState(false);
  let location = useLocation();
  let mobile = props.windowSize.width > 800 ? false : true;

  useEffect(() => {
    if (props.windowSize.width > 800) {
      setToggled(false);
    }
  }, [props.windowSize.width]);

  useEffect(() => {
    setToggled(false);
  }, [location]);

  return (
    <nav className="NavBar">
      <div className="NavContents">
        <NavLink route="/">
          <img className="NavImage" src={Logo} alt="CS + Social Good Logo" />
        </NavLink>
        <NavToggler
          mobile={mobile}
          toggle={() => {
            setToggled(!toggled);
          }}
          toggled={toggled}
        >
          <NavList mobile={mobile} links={props.links} />
        </NavToggler>
      </div>
    </nav>
  );
}

function NavLink(props: NavLinkProps): JSX.Element {
  return (
    <Link to={props.route}>
      <button className="NavLink">{props.children}</button>
    </Link>
  );
}

function NavList(props: NavListProps): JSX.Element {
  let links: JSX.Element[] = props.links.map((link: any) => (
    <li key={link.name}>
      <NavLink route={link.route}>{link.name}</NavLink>
    </li>
  ));

  let style = props.mobile ? "Column" : "Row";

  return <ul className={`NavList ${style}`}>{links}</ul>;
}

function NavToggler(props: NavTogglerProps): JSX.Element {
  let hamburger_button: JSX.Element = (
    <button
      key="button"
      onClick={props.toggle}
      aria-label="menu"
      className="NavTogglerButton NavLink"
    >
      <svg viewBox="0 0 100 80" width="20" height="20">
        <rect width="100" height="15"></rect>
        <rect y="30" width="100" height="15"></rect>
        <rect y="60" width="100" height="15"></rect>
      </svg>
    </button>
  );

  let contents = [];

  if (props.mobile) {
    contents.push(hamburger_button);
  }

  if (!props.mobile || props.toggled) {
    contents.push(props.children);
  }

  return <div className="NavTogglerContainer">{contents}</div>;
}
