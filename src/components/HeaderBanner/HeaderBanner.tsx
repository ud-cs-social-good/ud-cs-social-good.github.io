import React from "react";
import "./HeaderBanner.scss";

type HeaderProps = {
  children: JSX.Element;
};

export function HeaderBanner(props: HeaderProps): JSX.Element {
  return (
    <div className="HeaderBanner">
      <div className="HeaderName">
        University of Delaware
        <br />
        CS + Social Good
      </div>
      <div>{props.children}</div>
    </div>
  );
}
