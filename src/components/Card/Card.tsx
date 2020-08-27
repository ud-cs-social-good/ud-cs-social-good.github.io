import React from "react";
import "./Card.scss";

type CardProps = {
  children: JSX.Element;
};

type SplitCardProps = {
  left: JSX.Element;
  right: JSX.Element;
};

type NameCardProps = {
  picture: JSX.Element;
  info: JSX.Element;
}

export function CenteredCard(props: CardProps): JSX.Element {
  return (
    <div className="Card">
      <div className="Centered">{props.children}</div>
    </div>
  );
}

export function DenseCard(props: CardProps): JSX.Element {
  return (
    <div className="Card">
      <div className="Dense">{props.children}</div>
    </div>
  );
}

export function SplitCard(props: SplitCardProps): JSX.Element {
  return (
    <div className="Card Split">
      <div className="Left">{props.left}</div>
      <div className="Right">{props.right}</div>
    </div>
  );
}

export function NameCard(props: NameCardProps): JSX.Element {
  return (
    <div className="Card Split Name">
      <div className="Picture Left">{props.picture}</div>
      <div className="Right">{props.info}</div>
    </div>
  );
}

